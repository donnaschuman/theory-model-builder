/* Builds the regression fixtures by using the app the way a student does, then pressing Save my work.
   Run against version 1.4.0 (and 1.3.0 for legacy-1.3.json), never against a newer build:
     node tests/make-fixtures.js http://127.0.0.1:8780/ http://127.0.0.1:8781/
   Topics are invented. No student data. Requires a globally installed Playwright (no package.json). */
"use strict";
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path");
const BASE = process.argv[2] || "http://127.0.0.1:8780/";
const LEGACY = process.argv[3] || "";
const OUT = path.join(__dirname, "fixtures");
fs.mkdirSync(OUT, { recursive: true });

async function fresh(browser, url, q) {
  const ctx = await browser.newContext({ acceptDownloads: true, viewport: { width: 1440, height: 1000 } });
  const pg = await ctx.newPage();
  pg.on("pageerror", e => { throw e; });
  await pg.goto(url + "index.html" + (q || ""));
  await pg.evaluate(() => { localStorage.clear(); sessionStorage.clear(); });
  await pg.goto(url + "index.html" + (q || ""));
  return { ctx, pg };
}
async function saveTo(pg, name) {
  const [dl] = await Promise.all([pg.waitForEvent("download"), pg.evaluate(() => document.getElementById("saveFile").click())]);
  const p = path.join(OUT, name);
  await dl.saveAs(p);
  const d = JSON.parse(fs.readFileSync(p, "utf8"));
  console.log("wrote", name, "appVersion", d.appVersion, "step", d.stepName, "qstep", d.state.qstep, "mode", d.state.mode);
}
async function err(pg) { const e = await pg.$("#err"); return e ? (await e.textContent()).trim() : ""; }
async function qnext(pg) { await pg.click("#qNext"); await pg.waitForTimeout(80); const e = await err(pg); if (e) throw new Error("short version blocked: " + e); }
async function next(pg) { await pg.click("#next"); await pg.waitForTimeout(80); const e = await err(pg); if (e) throw new Error("full version blocked on " + (await pg.textContent("#stepTitle")) + ": " + e); }
async function goto(pg, i) { await pg.evaluate(i => document.querySelector('[data-goto="' + i + '"]').click(), i); await pg.waitForTimeout(100); }

(async () => {
  const browser = await chromium.launch();

  /* 1. Short version, stopped on Boxes with one empty cause. */
  {
    const { ctx, pg } = await fresh(browser, BASE);
    await pg.click("#spStart");
    await pg.fill("#q_who", "Older adults living alone in rural Ohio");
    await pg.fill("#q_out", "Loneliness");
    await qnext(pg); await qnext(pg);
    await pg.click('[data-qshape="med"]'); await qnext(pg);
    await pg.fill("#q_c0", "Social support");
    await pg.click("#qAddCause");
    await pg.fill("#q_med", "Daily social contact");
    await saveTo(pg, "short-screen4.json");
    await ctx.close();
  }

  /* 2. Short version finished, shape Both, two causes, a theory, a moderator whose name has a proper noun. */
  {
    const { ctx, pg } = await fresh(browser, BASE);
    await pg.click("#spStart");
    await pg.fill("#q_who", "First-generation college students in Texas");
    await pg.fill("#q_out", "Academic burnout");
    await qnext(pg);
    await pg.selectOption("#q_theory", "SCT"); await pg.waitForTimeout(80);
    await qnext(pg);
    await pg.click('[data-qshape="both"]'); await qnext(pg);
    await pg.fill("#q_c0", "Financial strain");
    await pg.click("#qAddCause");
    await pg.fill("#q_c1", "Faculty support");
    await pg.fill("#q_med", "Academic self-efficacy");
    await pg.fill("#q_mod", "Years in the United States");
    await pg.fill("#q_groups", "under 5 years vs. 5 or more years");
    await pg.check("#qmp2");
    await qnext(pg);
    for (const [id, v] of [["c0>med", "-"], ["c1>med", "+"], ["med>out", "-"]]) { await pg.click(`[data-qsign="${id}"][data-val="${v}"]`); await pg.waitForTimeout(40); }
    await qnext(pg);
    await saveTo(pg, "short-done-both.json");
    await ctx.close();
  }

  /* 3. Full version, stopped at In-between, one theory, three propositions. */
  {
    const { ctx, pg } = await fresh(browser, BASE);
    await pg.click("#spFull"); await pg.waitForTimeout(80);
    await pg.fill('[data-pp="who"]', "Women veterans");
    await pg.fill('[data-pp="where"]', "using VA primary care in Texas");
    await next(pg);
    await pg.fill("#f_out", "Mental health service use"); await next(pg);
    await pg.fill("#f_def", "Any VA mental health visit within 12 months of a positive screen, from VA records"); await next(pg);
    await pg.selectOption("#f_theory", "HBM"); await pg.waitForTimeout(80); await next(pg);
    const props = [["Perceived barriers reduce the likelihood of taking action.", "98", "Perceived barriers", "Mental health service use", "-"],
                   ["Perceived benefits increase the likelihood of taking action.", "98", "Perceived benefits", "Mental health service use", "+"],
                   ["Cues to action prompt the decision to act.", "99", "Cues to action", "Mental health service use", "+"]];
    for (let k = 0; k < props.length; k++) {
      const [q, p, f, t, s] = props[k];
      await pg.click("#addProp");
      await pg.fill("#pq" + k, q); await pg.fill("#pp" + k, p); await pg.fill("#pfr" + k, f); await pg.fill("#pto" + k, t);
      await pg.click(`[data-psign="${k}"][data-val="${s}"]`);
    }
    await next(pg);
    await next(pg);
    await saveTo(pg, "full-step7.json");

    /* 4. Continue to Results; edit one hypothesis and the caption. */
    await pg.click('[data-set="medYN"][data-val="no"]'); await next(pg);
    await pg.click('[data-set="modYN"][data-val="no"]'); await next(pg);
    for (const el of await pg.$$("textarea[data-cdef]")) await el.fill("A working definition.");
    for (const el of await pg.$$("input[data-cdef]")) await el.fill("Rosenstock, 1966");
    await next(pg);
    const ids = await pg.$$eval("[data-sign]", els => [...new Set(els.map(e => e.dataset.sign))]);
    for (const id of ids) { await pg.click(`[data-sign="${id}"][data-val="${id.startsWith("c0") ? "-" : "+"}"]`); await pg.waitForTimeout(40); }
    await next(pg);
    for (const el of await pg.$$("[data-basis][data-val=theory]")) await el.click();
    let k = 0; for (const el of await pg.$$("textarea[data-reason]")) await el.fill("Reason " + (++k) + " from the theory.");
    await next(pg); await next(pg); await next(pg);
    await pg.click('[data-edit="hyps"]');
    const h = await pg.inputValue("#hyps");
    await pg.fill("#hyps", h.replace("will be associated with", "will predict"));
    await pg.click('[data-edit="cap"]');
    await pg.fill("#cap", (await pg.inputValue("#cap")) + "\nNote. VA = U.S. Department of Veterans Affairs.");
    await saveTo(pg, "full-results-edited.json");
    await ctx.close();
  }

  /* 5. Two theories, one new concept, partial mediation on one cause. Preview mode skips required answers. */
  {
    const { ctx, pg } = await fresh(browser, BASE);
    await pg.click("#spFull"); await pg.waitForTimeout(80);
    await pg.fill('[data-pp="who"]', "Adolescents in kinship foster care");
    await pg.fill('[data-pp="where"]', "in Arizona");
    await next(pg);
    await pg.fill("#f_out", "School engagement"); await next(pg);
    await pg.fill("#f_def", "Score on a school engagement scale at the end of the school year"); await next(pg);
    await pg.selectOption("#f_theory", "SCT"); await pg.waitForTimeout(80);
    await pg.click("#addTheory"); await pg.selectOption("#mt0", "ECOL"); await pg.waitForTimeout(80);
    await next(pg);
    const props = [["Self-efficacy shapes effort and persistence.", "390", "Self-efficacy", "School engagement", "+", "A"],
                   ["Proximal processes in the microsystem drive development.", "", "Caregiver warmth", "Self-efficacy", "+", "B"]];
    for (let k = 0; k < props.length; k++) {
      const [q, p, f, t, s, th] = props[k];
      await pg.click("#addProp");
      if (k) await pg.selectOption("#pt" + k, th);
      await pg.fill("#pq" + k, q); if (p) await pg.fill("#pp" + k, p); await pg.fill("#pfr" + k, f); await pg.fill("#pto" + k, t);
      await pg.click(`[data-psign="${k}"][data-val="${s}"]`);
    }
    await next(pg);
    const c = await pg.$$eval("[data-cause]", els => els.map(e => e.value));
    if (!c.some(x => /school stability/i.test(x))) { await pg.click("#addCause"); const n = (await pg.$$("[data-cause]")).length - 1; await pg.fill("#f_c" + n, "School stability"); }
    await next(pg);
    await pg.click('[data-set="medYN"][data-val="yes"]');
    if (!(await pg.inputValue('[data-bind="mediator"]'))) await pg.fill('[data-bind="mediator"]', "Self-efficacy");
    await pg.locator("[data-partial]").last().click(); await pg.waitForTimeout(80);
    await next(pg);
    await pg.click('[data-set="modYN"][data-val="no"]'); await next(pg);
    const nTags = await pg.locator("select[data-ctag]").count();
    for (let k = 0; k < nTags; k++) {
      const sel = pg.locator("select[data-ctag]").nth(k), want = k === nTags - 1 ? "new" : "";
      if (want) await sel.selectOption(want); else if (!(await sel.inputValue())) await sel.selectOption("A");
      await pg.waitForTimeout(60);
    }
    await saveTo(pg, "full-two-theories.json");
    await ctx.close();
  }

  /* 6. Work started from the finished example, carried into the full version and changed. */
  {
    const { ctx, pg } = await fresh(browser, BASE);
    await pg.click("#spDemo"); await pg.waitForTimeout(100);
    await pg.click('[data-qgo="5"]'); await pg.waitForTimeout(60);
    await pg.click('[data-qsign="c1>med"][data-val="-"]'); await pg.waitForTimeout(60);
    await pg.click('[data-qgo="5"]'); await pg.waitForTimeout(60); await qnext(pg);
    await pg.click("#qFull"); await pg.waitForTimeout(100);
    await goto(pg, 13);
    await saveTo(pg, "example-copy.json");
    await ctx.close();
  }

  /* 7. A file saved by 1.3.0. */
  if (LEGACY) {
    const { ctx, pg } = await fresh(browser, LEGACY);
    await pg.click("#spStart"); await pg.waitForTimeout(80);
    await pg.fill('[data-pp="who"]', "Refugee women");
    await pg.fill('[data-pp="where"]', "resettled in Chicago");
    await next(pg);
    await pg.fill("#f_out", "Depressive symptoms"); await next(pg);
    await pg.fill("#f_def", "PHQ-9 score at 6 months after arrival"); await next(pg);
    await pg.selectOption("#f_theory", "TPB"); await pg.waitForTimeout(80); await next(pg);
    await next(pg);
    await pg.fill("#f_c0", "Social isolation"); await pg.click("#addCause"); await pg.fill("#f_c1", "English language use"); await next(pg);
    await pg.click('[data-set="medYN"][data-val="yes"]'); await pg.fill('[data-bind="mediator"]', "Loneliness"); await next(pg);
    await pg.click('[data-set="modYN"][data-val="no"]'); await next(pg);
    for (const el of await pg.$$("textarea[data-cdef]")) await el.fill("A working definition.");
    await next(pg);
    const ids = await pg.$$eval("[data-sign]", els => [...new Set(els.map(e => e.dataset.sign))]);
    for (const id of ids) { await pg.click(`[data-sign="${id}"][data-val="+"]`); await pg.waitForTimeout(40); }
    await next(pg);
    for (const el of await pg.$$("[data-basis][data-val=research]")) await el.click();
    let k = 0; for (const el of await pg.$$("textarea[data-reason]")) await el.fill("Reason " + (++k) + " from prior research.");
    await next(pg); await next(pg); await next(pg);
    await saveTo(pg, "legacy-1.3.json");
    await ctx.close();
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
