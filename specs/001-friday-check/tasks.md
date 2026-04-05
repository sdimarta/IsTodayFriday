---

description: "Task list for Friday Check Landing Page implementation"
---

# Tasks: Friday Check Landing Page

**Input**: Design documents from `/specs/001-friday-check/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Tests**: Not requested. Manual testing only per constitution Quality Standards.

**Organization**: Single user story (P1). All tasks feed one independently deliverable increment.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: All files at repository root — `index.html`, `style.css`, `script.js`

## Phase 1: Setup (Project Initialization)

**Purpose**: Create the three flat files at repository root

- [x] T001 Create `index.html` with semantic HTML5 boilerplate, `<meta charset="utf-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1">`, linked `style.css` and `script.js`
- [x] T002 Create empty `style.css`
- [x] T003 Create empty `script.js`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: N/A — this project has no shared infrastructure, database, auth, or routing. The three files from Phase 1 are the complete foundation.

**Checkpoint**: Foundation ready — user story implementation can begin.

---

## Phase 3: User Story 1 - View Friday Status (Priority: P1) 🎯 MVP

**Goal**: User opens the page and sees "Yes, today is Friday." with 🥳 or "No, today is not Friday." with 😢, determined by their local time.

**Independent Test**: Open `index.html` in a browser on any day; verify the displayed answer and emoji match the actual day of the week.

### Implementation for User Story 1

- [x] T004 [P] [US1] Build semantic HTML structure in `index.html`: `<main>` container, `<h1>` for the answer text, `<span role="img" aria-label="celebration">🥳</span>` and `<span role="img" aria-label="sadness">😢</span>` elements, `<noscript>` block with "Sorry, we can't tell you if today is Friday without JavaScript."
- [x] T005 [P] [US1] Write centered responsive CSS in `style.css`: flexbox centering on `<body>`, system font stack, accessible color contrast (WCAG AA minimum), responsive font sizing with `rem`/`vh` units
- [x] T006 [US1] Implement day-of-week detection in `script.js`: use `new Date().getDay() === 5` to determine Friday, update the visible answer text and show/hide the correct emoji span
- [x] T007 [US1] Implement midnight auto-refresh in `script.js`: calculate ms until next midnight with `setTimeout(() => location.reload(), msUntilMidnight)`
- [x] T008 [US1] Verify zero console errors/warnings on load — open DevTools and confirm clean console

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Final verification across browsers and quickstart validation

- [x] T009 [P] Verify correct display in Chrome (latest stable)
- [x] T010 [P] Verify correct display in Firefox (latest stable)
- [x] T011 [P] Verify correct display in Safari (latest stable)
- [x] T012 [P] Verify correct display in Edge (latest stable)
- [x] T013 Run quickstart.md validation — open `index.html` directly and confirm all steps pass

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: No tasks — pass-through
- **User Story 1 (Phase 3)**: Depends on Setup completion (files must exist)
- **Polish (Phase 4)**: Depends on User Story 1 completion

### User Story Dependencies

- **User Story 1 (P1)**: Only story — no inter-story dependencies

### Within User Story 1

- T004 (HTML) and T005 (CSS) can run in parallel — different files, no dependencies
- T006 (JS logic) depends on T004 (HTML elements must exist to manipulate)
- T007 (midnight refresh) depends on T006 (core logic in place first)
- T008 (console check) depends on T006 + T007 (all JS complete)

### Parallel Opportunities

- T001, T002, T003 — all create empty/boilerplate files, no dependencies
- T004, T005 — HTML and CSS are independent files
- T009, T010, T011, T012 — all browser verifications are independent

---

## Parallel Example: User Story 1

```bash
# Launch HTML and CSS in parallel:
Task: "Build semantic HTML structure in index.html"
Task: "Write centered responsive CSS in style.css"

# Then JS logic:
Task: "Implement day-of-week detection in script.js"

# Then midnight refresh:
Task: "Implement midnight auto-refresh in script.js"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001–T003)
2. Complete Phase 3: User Story 1 (T004–T008)
3. **STOP and VALIDATE**: Open `index.html` in browser, confirm correct answer
4. Deploy by serving the three static files

### Incremental Delivery

1. Setup + US1 → MVP (complete product)
2. Polish → cross-browser verification

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- No test framework needed — manual browser verification per constitution
- Commit after each task or logical group
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
