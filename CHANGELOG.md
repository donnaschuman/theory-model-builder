# Changelog

## 1.4.0 (2026-10-25)

Students found the 15 steps too dense to start: too much reading before they saw a model. This release adds a short version and makes it the starting point.

### Short version (5 screens)
- New starting point on the home page: **Start (5 short screens)**. One sentence of directions per screen, with an example in each field's hint.
- Screens: Who and what (population and outcome); Theory (optional, with search); Shape (pick a picture: one step, a middle step, depends on the group, or both; each card names its term: direct effect, mediation, moderation); Boxes (causes, middle step, and group or condition laid out left to right like the figure); + or − (one choice per arrow, worded "More X leads to more Y", with the figure drawn below).
- A chosen theory's concepts appear on the Boxes screen as one-click ideas. Click a box, then click an idea to put it there.
- The last screen shows the figure, research question, and hypotheses, with Download picture (PNG), Print or save as PDF, Copy, and Save my work.
- **Get it ready for my paper** opens the full version at Define outcome with every short-version answer filled in and those steps marked as seen. A banner says so and offers **Back to the short version**; the step list has the same link.
- The finished example opens in the short version at screen 1.
- "Use this in my model" in the theory library starts the short version with that theory chosen when the student has no work yet.
- The full version is still available from the home page: **Use the full version (15 steps)**.

### Changed
- Until a student sees the In-between step in the full version, the mediation hypothesis says "will mediate" instead of "will completely mediate," because the short version does not ask about complete or partial mediation.
- An arrow with no direction chosen shows "?" in the figure instead of "+".
- The figure legend leaves out "Theory:" when no theory is chosen.

### Compatibility
- Files saved by 1.3.0 and earlier open in the full version, as before. Files saved in the short version open on the screen where the student stopped.
- Automated axe-core checks (WCAG 2.2 AA) report no violations on the home page, every short-version screen, and the full version's first step with the banner, at desktop and phone widths.

## 1.3.0 (2026-10-20)

Changes from two comprehension reviews: in each, a reviewer worked through every screen as a first-year international PhD student reading English as an additional language, with no outside help.

### Easier to follow
- Key terms: a list of 25 plain one-line definitions (proposition, seminal source, operational and conceptual definition, mediator, moderator, exploratory arrow, paradigm, ontology, and others), opened from every "What to do" box and from the step list.
- The finished example opens at step 1, so students see how each step was filled in. Its banner spells out VA (U.S. Department of Veterans Affairs) and post-9/11, and the results page does not ask students to save someone else's model.
- The step count is always 15. When a step is not needed (Moderator details with no moderator), the step list keeps its number and shows "(skipped: no moderator)."
- Page headings start with the step name ("Causes: what comes first?"), and the home page lists the same five parts and step numbers as the step list.
- Instructions say "arrow" everywhere (not path or link). The library is called the Theory library everywhere.
- On the results page, the conceptual-paper option is "Numbered statements," labeled S1, S2, so it is not confused with the theory's propositions (P1, P2). "Regenerate" is "Rebuild from my answers," and the page says it replaces edits. SVG and Mermaid moved under "More formats (for advanced users)."
- Paper notes has a teaching box defining paradigm (each of the five), ontology, and epistemology, with examples, and says the step is optional.
- Line styles defines an exploratory (dashed) arrow. Moderator arrows are always dashed; the solid option is gone for them.
- The mediation hypothesis is numbered last (after moderation), so arrow numbers have no gap; the arrow steps say which number it is and why it has no arrow.
- Plainer wording: "Need help writing a reason?" (was "I'm stuck"), "Complete this sentence," "Mark it for later," "Click a button with + to add it," and examples without idioms.
- Line styles asks students to choose + or − for every arrow; nothing is preset. The note beside an unset arrow says which way its proposition points.
- Key propositions: the box is labeled "Exact sentence from the source." In the example, a note explains what was entered.
- The numbered hypotheses tell students to reword sentences built from category concepts (a strategy, a group).
- The research question keeps capital letters for nationalities and other proper nouns ("Among Nigerian immigrant women").

### Fewer surprises
- Self-check flags a proposition not linked to any arrow, a reason that still contains a ___ blank, a definition without a source, and "The theory says so" for an arrow that starts from a concept marked "Not from a theory."
- The In-between step says when the app filled in the in-between concept from the propositions, and shows which proposition links a cause straight to the outcome next to its partial-mediation box.
- Moderator details: students must choose which arrow a moderator changes (no preset), and the example groups match the moderator.
- Error messages clear when the student starts typing. The Why this arrow? message names arrows by their H numbers, with links to each panel.
- The proposition box on Why this arrow? can be closed and stays closed.
- Start over reminds students to save first.
- Self-check flags an arrow with no direction and a proposition with no exact sentence. For arrow problems, "Fix this" opens that arrow's panel and puts the cursor in its reason box.
- Changing the theory shows a shorter message that names what will be removed.
- Dragging a proposition no longer pushes the page down while it moves.

### Theory choice
- A search box shortens the Theory menu ("stress," "suicide," "veterans"). The search also reads group names, propositions, and revision notes, so "refugee" and "youth" find every related entry, in the app and in the library.
- Each library entry has a "Use this in my model" button. When the library was opened from the app, the button returns to the app's tab and closes the library tab. If the app is open in another tab, that tab updates instead of overwriting the change.

### Phones
- The results page fits the screen. Tables stack as cards, and "View figure full screen" shows the figure at a readable size.
- "All steps" opens the step list. "View figure full screen" says to swipe left or turn the phone sideways.
- Buttons and links are at least 44 pixels tall.
- The proposition box does not stay fixed at the top of the screen.

### Saving
- The results page has a reminder and a Save my work button. The save buttons are hidden while viewing the example, and Home offers "Continue my model" when the student has their own model saved. The header says "Unsaved changes" or the time of the last save. The instructor guide has text to give students about saving and coming back.

## 1.2.1 (2026-10-20)

### Changed
- Population step: four boxes (Who, required; Age or life stage; Where; When or qualifying event) replace the single population box. The app builds the full population phrase from them as students type, turning "18-34" into "ages 18 to 34" and "65+" into "aged 65 and older," and adding "in" before a place written without a preposition. Students can edit the full phrase; once edited, it stops updating, and a Rebuild from the boxes button restores it. Saved files from earlier versions open with their population phrase in the Who box.

### Fixes
- Changing a theory left the old theory's work in the model: its seminal source, propositions, causes, in-between step, definitions, reasons, arrow links, and paradigm notes, now labeled with the new theory's letter. Changing a theory that already has work now opens a box that lists what came from the old theory. "Switch and clear" removes it, fills in the new theory's seminal source, and rewrites the research question, hypotheses, and figure caption. "Cancel" keeps the old theory and suggests adding the new one as a second theory. Concepts count as the old theory's when they are marked with its letter or are one of its library concepts.
- Choosing a library theory for the first time fills in its seminal source (labeled for students to verify).
- Removing a second theory moved its propositions to Theory A. Its propositions are now removed, and arrow links stay attached to the right propositions.
- Self-check flags a seminal source that belongs to a different library theory, and propositions marked as coming from a theory no longer in the model.

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
- Theories, models, and frameworks library: 112 entries in 18 groups, listed alphabetically (aging; child maltreatment and family violence; crime and deviance; critical and empowerment perspectives; disability, stigma, and recovery; health behavior and service use; historical trauma, racism, and Indigenous perspectives; human development and family; immigration and forced migration; loneliness, isolation, and social exclusion; military service, veterans, and trauma; organizations, policy, and macro practice; poverty, inequality, and homelessness; resilience; social capital and neighborhoods; stress, coping, and support; substance use; suicide). Each entry is labeled by type (theory, model, framework, hypothesis, typology, approach, or critical perspective); a box on the library page defines each type (Nilsen, 2015) and what it means for building a figure, frameworks and typologies note that the student supplies the arrows, and students can filter by type. Each entry gives what the theory says, the seminal source, a note when the theory was substantially revised and by whom, common propositions (paraphrased; students still find the exact wording and page), key concepts, and later revisions, extensions, and origins with full APA references. Critical Race Theory and intersectionality are listed with tenets and a note on how they are used in a model. References were checked against CrossRef, PubMed, publisher pages, and library catalogs.
- The Theory step uses a grouped menu of library theories (Type my own is still available), and the chosen theory's library panel opens below it. Choosing a theory fills its concept chips and its suggested seminal source; the Key propositions step notes when the theory was revised.
- New Theory library page (`library.html`), linked from the app bar and the Theory step. Groups and theories open as a two-level accordion (click a group, then a theory), with a search box and Open all / Close all.
- Population step: a "How to make a population specific" box (who, age or life stage, where, when or what qualifies them), a weak-to-strong example, and two warnings (keep it to one phrase; leave out the outcome and causes). The self-check flags a very general population.
- Fixed: on phones, an empty yellow banner showed at the top of every step.
- Fixed: "Start a new model" and "Start over" did nothing in browsers that block pop-up confirmations (some phone and in-app browsers). All confirmations now appear in a box on the page.
- Green teaching boxes are collapsible. They start closed with their main rule showing, and each box remembers whether it was opened. The "Theory, model, or framework?" box on the library page works the same way.
- "Social determinants of health" is now "social determinants," with a one-line definition, because the app's outcomes are not only health outcomes.
- Results: the research question section explains that there is one main question, a subquestion for an in-between step and each moderator, and usually several hypotheses (one per arrow).
- Outcome and Define outcome steps: green teaching boxes, "How to name an outcome" and "How to say what counts," with rules and weak-to-strong examples, like the population box.
- Define concepts: the directions explain that panels fill in automatically from the Causes, In-between, and Moderation steps; if no causes have been added yet, a notice says so and links to the Causes step.
- Key propositions: a new teaching box, "Which propositions do I need?", and revised directions explain that students use only the propositions their model needs, not every proposition in a theory, and can take one proposition from one theory and another from a second theory.
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
