/* Regression test for saved work.
   For each file in tests/fixtures, open it with Open saved work, then record the research question, the
   hypotheses, the figure caption (from a fresh Save my work file), and the exported SVG figure.
   Compare them with tests/baseline, which was recorded from version 1.4.0.

   node tests/regress.js                      compare this build with the baseline
   node tests/regress.js --record             record the baseline (run only on 1.4.0)
   node tests/regress.js --old <url>          also run the downgrade test: open work saved by this build in the
                                              build at <url> (for example, 1.4.0 served on another port)

   A difference fails the test unless tests/declared-changes.json lists it for that fixture and field, with a
   reason. Requires a globally installed Playwright (no package.json in the repository). */
"use strict";
const { chromium } = require("playwright");
const http = require("http"), fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, ".."), FIX = path.join(__dirname, "fixtures"), BASE = path.join(__dirname, "baseline");
const args = process.argv.slice(2), RECORD = args.includes("--record");
const OLD = args.includes("--old") ? args[args.indexOf("--old") + 1] : "";
const DECL = fs.existsSync(path.join(__dirname, "declared-changes.json")) ? JSON.parse(fs.readFileSync(path.join(__dirname, "declared-changes.json"), "utf8")) : {};
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".woff2": "font/woff2", ".svg": "image/svg+xml", ".png": "image/png" };

function serve() {
  return new Promise(res => {
    const s = http.createServer((q, r) => {
      const u = decodeURIComponent(q.url.split("?")[0]), f = path.join(ROOT, u === "/" ? "index.html" : u);
      if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); return r.end(); }
      r.writeHead(200, { "Content-Type": TYPES[path.extname(f)] || "application/octet-stream" }); fs.createReadStream(f).pipe(r);
    });
    s.listen(0, "127.0.0.1", () => res(s));
  });
}
async function openFile(browser, url, file) {
  const ctx = await browser.newContext({ acceptDownloads: true, viewport: { width: 1440, height: 1000 } });
  const pg = await ctx.newPage(), errors = [];
  pg.on("pageerror", e => errors.push(String(e)));
  pg.on("console", m => { if (m.type() === "error") errors.push(m.text()); });
  await pg.goto(url + "index.html");
  await pg.evaluate(() => { localStorage.clear(); sessionStorage.clear(); });
  await pg.goto(url + "index.html");
  await pg.setInputFiles("#fileIn", file);
  await pg.waitForTimeout(400);
  const fileErr = (await pg.textContent("#fileErr")).trim();
  return { ctx, pg, errors, fileErr };
}
async function outputs(pg) {
  const [dl] = await Promise.all([pg.waitForEvent("download"), pg.evaluate(() => document.getElementById("saveFile").click())]);
  const p = await dl.path(), d = JSON.parse(fs.readFileSync(p, "utf8"));
  const svg = await pg.evaluate(() => window.__exportSVG());
  return { saved: d, out: { researchQuestion: d.generated.researchQuestion, hypotheses: d.generated.hypotheses, figureCaption: d.generated.figureCaption, svg } };
}
function lineDiff(a, b) {
  const A = String(a).split("\n"), B = String(b).split("\n"), out = [];
  for (let i = 0; i < Math.max(A.length, B.length); i++) if (A[i] !== B[i]) out.push("    - " + (A[i] === undefined ? "(none)" : A[i].slice(0, 220)) + "\n    + " + (B[i] === undefined ? "(none)" : B[i].slice(0, 220)));
  return out.slice(0, 8).join("\n");
}

(async () => {
  const server = await serve(), url = "http://127.0.0.1:" + server.address().port + "/";
  const browser = await chromium.launch();
  const files = fs.readdirSync(FIX).filter(f => f.endsWith(".json")).sort();
  let fail = 0;
  fs.mkdirSync(BASE, { recursive: true });
  for (const f of files) {
    const name = f.replace(/\.json$/, "");
    const r = await openFile(browser, url, path.join(FIX, f));
    if (r.fileErr) { console.log("FAIL", name, "did not open:", r.fileErr); fail++; await r.ctx.close(); continue; }
    const { saved, out } = await outputs(r.pg);
    if (r.errors.length) { console.log("FAIL", name, "page errors:", r.errors.join(" | ")); fail++; }
    if (RECORD) { fs.writeFileSync(path.join(BASE, f), JSON.stringify(out, null, 2) + "\n"); console.log("recorded", name); }
    else {
      const base = JSON.parse(fs.readFileSync(path.join(BASE, f), "utf8")), decl = DECL[name] || {};
      for (const k of Object.keys(base)) {
        if (base[k] === out[k]) { if (decl[k]) console.log("note", name, k, "is declared as changed but did not change"); continue; }
        if (decl[k]) console.log("DECLARED", name, k + ":", decl[k] + "\n" + (k === "svg" ? "    (SVG differs)" : lineDiff(base[k], out[k])));
        else { console.log("FAIL", name, k, "changed\n" + (k === "svg" ? "    (SVG differs)" : lineDiff(base[k], out[k]))); fail++; }
      }
      if (!Object.keys(base).some(k => base[k] !== out[k])) console.log("ok  ", name);
    }
    /* Downgrade test: work saved by this build must open in the old build, from a file and from browser storage. */
    if (OLD) {
      const tmp = path.join(require("os").tmpdir(), "stmb-downgrade-" + f);
      fs.writeFileSync(tmp, JSON.stringify(saved));
      const o = await openFile(browser, OLD, tmp);
      const oErr = o.fileErr || (o.errors.length ? o.errors.join(" | ") : "");
      const stored = await r.pg.evaluate(() => localStorage.getItem("theoryModelApp.v1"));
      await o.pg.evaluate(v => { localStorage.clear(); localStorage.setItem("theoryModelApp.v1", v); }, stored);
      await o.pg.goto(OLD + "index.html"); await o.pg.waitForTimeout(200);
      const cont = await o.pg.$("#spCont");
      if (cont) { await cont.click(); await o.pg.waitForTimeout(200); }
      const sErr = o.errors.length ? o.errors.join(" | ") : (cont ? "" : "no Continue button");
      if (oErr || sErr) { console.log("FAIL", name, "downgrade:", oErr || sErr); fail++; } else console.log("ok  ", name, "downgrade (file and browser storage)");
      await o.ctx.close();
    }
    await r.ctx.close();
  }
  await browser.close(); server.close();
  console.log(fail ? fail + " failure(s)" : "All fixtures passed.");
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
