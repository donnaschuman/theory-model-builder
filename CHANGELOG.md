# Changelog

## 1.2.0 (2026-10-13)

### Simplified
- Removed the Paper approach step and the six paper types. They did not help students learn to build a conceptual model and made the app harder to follow in class. Students go from Define outcome straight to Theory and can still add a second theory.
- Removed paper-type-specific fields (the case field and integration type) and references in the instructor guide and README.
- Saved files that recorded a paper type still open; the choice is ignored.
- Rewrote the home page, coaching tips, and step introductions in plain language. Removed the feature cards and slogan headline.
- The citation and AI disclosure appear once, in the About section on the home page. Removed the copies from the footer, the results page, and the guide footer.
- Renamed "Paper kit" to "For your paper" on the results page.
- The research question is now one main question plus numbered subquestions: one for the mediator and one per moderator.
- Hypotheses are one plain sentence each. The population is no longer repeated in every hypothesis, the three indirect hypotheses are one mediation hypothesis, and sources and reasons are in a separate "Where each one comes from" table.
- Source propositions show the seminal citation once per theory, and the page once when all propositions share it.
- The figure's side panel is now "Change an arrow," with instructions; the proposition tray moved off the results page.
- The finished example has one moderator (distance to care), for six hypotheses instead of nine.
- Preview key: adding `?preview` to the address lets instructors move through every step without answering. "Exit preview" turns it off.
- Hypotheses are labeled by type: direct, mediation, or moderation, with a one-line definition of each.
- Results page: each section has a colored header band and tinted body; the research question and hypotheses display with bold labels ("Main question:", "Subquestions:", "H1 (direct):"), with an Edit button for the text. Copy keeps the bold labels when pasted into Word.
- Figure caption displays as in an APA 7 paper: bold figure number, italic title, the figure, and an italic "Note." The Word download and Copy caption keep that formatting.
- Concept names are bold in the key concepts table.
- Every step opens with a short numbered "What to do" box in simple English, and every field has a one-line direction under its label, with an example where useful.
- The "Your model" panel says it is for viewing only.
- "Construct" is now "concept" throughout the propositions step, to match the rest of the app.
- Teaching box on the In-between step, "Mediator: how to decide": the why question, a frustration–aggression diagram, mediator vs. moderator, and complete vs. partial mediation.
- Teaching box on the Moderation step, "Cause or moderator? How to decide": a test for each role, a diagram, and when a social determinant is a moderator (Baron & Kenny, 1986; Cohen & Wills, 1985).
- With two theories, the Key propositions step explains how to combine them and the directions say "for each theory."
- Self-check flags a concept used as both a cause and a moderator, and a second theory with no concepts in the model.
- Partial mediation: on the In-between step, each cause can be marked as also affecting the outcome directly. It gets a curved direct arrow, its own direct hypothesis, and the mediation hypothesis says which links are completely and which are partially mediated. The figure legend and caption explain the curved arrow. The finished example uses partial mediation for perceived behavioral control (P5).
- Why this arrow?: click a proposition to select it, then click "Link here" on an arrow card. This works on every device; dragging still works. The directions now name the card menu as the first way to link.
- Each arrow's panel on the Line styles and Why this arrow? steps starts with a visible label (Arrow H1, Arrow H2, and so on) matching the figure and the results page. Directions say "panel" and explain it, instead of the unexplained word "card."
- Figure caption: no automatic note. The legend inside the figure already explains the lines, signs, letters, and arrow labels, so the note repeated it. Students add a note only for what the figure does not show (an abbreviation or an "Adapted from" statement).
- Where each one comes from: the Comes from column gives the APA in-text citation with page (for example, P1 (Ajzen, 1991, p. 179)), and the full APA reference for every cited source is listed under the table, alphabetically. Two-author and three-or-more-author sources are cited as "Fishbein & Ajzen, 1975" and "Smith et al., 2020"; page ranges use "pp." The Word download includes the references with a hanging indent.
- Theory library: 23 common theories in six groups (health behavior; stress, coping, and support; health services and inequality; human development and family; crime and deviance; empowerment and critical theories). Each entry gives what the theory says, the seminal source, a note when the theory was substantially revised and by whom, common propositions (paraphrased; students still find the exact wording and page), key concepts, and later revisions, extensions, and origins with full APA references. Critical Race Theory and intersectionality are listed with tenets and a note on how they are used in a model. References were checked against CrossRef, PubMed, publisher pages, and library catalogs.
- The Theory step uses a grouped menu of library theories (Type my own is still available), and the chosen theory's library panel opens below it. Choosing a theory fills its concept chips and its suggested seminal source; the Key propositions step notes when the theory was revised.
- New Theory library page (`library.html`), linked from the app bar and the Theory step, with a search box.
- Population step: a "How to make a population specific" box (who, age or life stage, where, when or what qualifies them), a weak-to-strong example, and two warnings (keep it to one phrase; leave out the outcome and causes). The self-check flags a very general population.
- Fixed: on phones, an empty yellow banner showed at the top of every step.
- Full text is always visible: proposition buttons wrap instead of cutting off, each linked arrow prints its full proposition under the menu, the seminal citation and "In my own words" boxes grow to fit, and long figure labels use smaller type over four lines before shortening.

## 1.1.0 (2026-10-13)

### Built for the theoretical paper
- New **Paper approach** step: critical theoretical analysis, theoretical comparison, elaboration, integration/synthesis (with integration type), integrative review, 6-point analysis, or a model only.
- **Multiple theories** per model, each with its own seminal source. Propositions are tagged to a theory, can cite a different source, and can be marked as new (elaboration, integration).
- New **Define concepts** step: conceptual definition, source, and source-theory tag for every box.
- New optional **Paper notes** step: target journal, the problem and how it is typically and alternatively defined, the case, and each theory's paradigm, ontology, epistemology, history, limits, and links to practice, policy, and research.
- **Paper kit** on Results: APA 7 figure caption and note, concepts table that pastes into Word as a table, Word file of paper notes, choice of hypotheses or numbered propositions.
- Figure shows each concept's source theory; comparison papers can show and export one theory at a time; arrows can be labeled with H numbers or source proposition numbers.

### Interaction
- Drag theory chips into the cause list; drag causes to reorder (with move buttons as the keyboard alternative).
- Drag a proposition onto an arrow, on the Why this arrow? step or directly on the figure.
- Arrows link to the proposition that names the same two constructs. Linking never sets the arrow's + or −; the self-check flags any arrow whose direction differs from its proposition.
- Figure: boxes redraw their arrows live while dragging, snap to a 10-pixel grid, and move with arrow keys. Clicking an arrow opens an editor for direction, line style, proposition, and reason. Hovering a box highlights its arrows.
- Live **Your model** panel beside each step, with progress counts and a draft research question.

### Design
- New color system: indigo ink, ultramarine actions, highlighter yellow for what is selected or current, and one color per theory (A pink, B cyan, C lime, D amber, E violet) on badges, chips, and on-screen figure labels. Exported figures stay black and white for APA.
- Raised, pressable chips, segmented controls, badges, and buttons.
- Self-hosted Atkinson Hyperlegible Next (body) and Bricolage Grotesque (headings); no external font requests.
- Step list with progress, layered cards, and responsive layouts for phone, tablet, and desktop.

### Finished example, instructor guide, and AI disclosure
- "See a finished example" opens a fully completed model (critical theoretical analysis, Theory of Planned Behavior, post-9/11 veterans) on the results page with every step open. A student's own work is set aside and restored with "Back to my model."
- New instructor guide (`guide.html`), linked from the app bar, footer, and README.
- AI credit and disclosure on the home page, in the footer, in the guide, and in the README.
- Video slots on four steps, hidden until a link is set.

### Fixes
- Removing or reordering a cause, or unchecking a moderator, no longer moves its reason, direction, line style, label, position, or proposition link onto a different box. Boxes now have stable ids; 1.0 files are converted on open.
- Progress started at "Step 2 of 14"; it now starts at step 1.
- Pressing Enter in a page-number or construct field no longer tries to advance the step.
- Returning to the old Start step and choosing "own topic" no longer erases the demo without warning (the step is retired).
- Moderation hypotheses were labeled "exploratory" because moderator arrows are dashed by default; dashed on a moderator now means moderation only.
- Moderator arrows aimed at the same path no longer land on one point over the H-number tag.
- The research question and hypotheses boxes grow to fit their text.
- Home page "How it works" now matches the steps.
- Accessibility: the figure no longer hides its arrow controls from screen readers; steps are no longer re-announced on every click; radio buttons use radio semantics; every drag has a keyboard alternative.
