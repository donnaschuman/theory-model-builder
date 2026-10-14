# Social Theory Model Builder

A single-page web app for building a conceptual model from a theory. Students enter a population, an outcome, a theory, and the theory's propositions with page numbers. The app produces a path figure, a research question, hypotheses, a concepts table, and notes for a theoretical paper.

Live: https://social-theory-model-builder.netlify.app

## What students do

1. **Question.** Population, outcome, and what counts as the outcome.
2. **Theory.** One theory (or a second if the model needs it), the seminal source for each, and 2 to 12 key propositions with page numbers.
3. **Model.** Causes (including social determinants of health), an in-between step (mediator), and moderators. Causes can be dragged in from theory chips and reordered.
4. **Concepts.** A conceptual definition and source for every box, tagged by source theory or marked as a new concept.
5. **Arrows.** Direction (+/−), line style, the proposition each arrow comes from (drag a proposition onto an arrow), and a one-sentence reason. Students set every arrow's direction themselves; the app flags any arrow whose direction differs from its linked proposition.
6. **Results.** Research question, hypotheses or propositions, the figure (SVG, PNG, Mermaid, PDF), an APA 7 figure caption and note, a concepts table that pastes into Word as a table, and a Word file of paper notes (problem definitions, each theory's ontology, epistemology, history, and limits).

## For instructors

The [instructor guide](https://social-theory-model-builder.netlify.app/guide.html) (`guide.html`) covers a seven-session teaching sequence, an assessment rubric, reviewing student files, discussion prompts, customization, and suggested syllabus language. "See a finished example" on the home page opens a completed model with every step available to browse.

## AI credit and disclosure

D. L. Schuman designed the tool, its teaching approach, and its coaching content, and directed its development. The code, interface text, automated tests, and instructor guide were drafted and revised with generative AI assistants: Grok (xAI) and Claude (Anthropic; Claude Opus 5.5). The author reviewed and tested the result and is responsible for it. The app itself contains no AI and sends nothing a student types to any service.

## Technical notes

- No build step: Netlify publishes the repo root (`index.html`, `guide.html`, `styles.css`, `fonts/`).
- Fonts are self-hosted under the SIL Open Font License (see `fonts/`): Atkinson Hyperlegible Next (body) and Bricolage Grotesque (headings and numerals).
- No data leaves the browser. Work saves in the browser and in "Save my work" JSON files. Files saved by version 1.0 open in 1.2 with every reason, direction, style, and link attached to the right arrow.
- Accessibility: every drag action has a keyboard alternative (move buttons, menus, arrow keys on figure boxes). Automated axe-core checks against WCAG 2.2 AA report no violations on any screen.

## Optional settings

At the top of the first `<script>` in `index.html`:

- `GOATCOUNTER_CODE`: cookieless anonymous visit counts.
- `SURVEY_URL`, `ADOPTION_URL`: optional feedback survey and instructor adoption form links.
- `VIDEOS`: short how-to videos for the Key propositions, In-between, Define concepts, and Why this arrow? steps. Paste a YouTube or Vimeo link to play it inside the step (the player loads only when a student presses play), or any other link to open it in a new tab. Empty strings hide the slot.

## How to cite

Schuman, D. L. (2026). *Social theory model builder* (Version 1.2.0) [Web application]. The University of Texas at Arlington. https://social-theory-model-builder.netlify.app

In-text: (Schuman, 2026). Machine-readable metadata is in `CITATION.cff` (GitHub's "Cite this repository") and `.zenodo.json`.

## License

MIT; see `LICENSE`.
