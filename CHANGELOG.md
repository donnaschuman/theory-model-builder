# Changelog

## 1.2.0 (2026-10-13)

### Simplified
- Removed the Paper approach step and the six paper types. They did not help students learn to build a conceptual model and made the app harder to follow in class. Students go from Define outcome straight to Theory and can still add a second theory.
- Removed paper-type-specific fields (the case field and integration type) and references in the instructor guide and README.
- Saved files that recorded a paper type still open; the choice is ignored.

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
