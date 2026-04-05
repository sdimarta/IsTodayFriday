<!--
  SYNC IMPACT REPORT
  ====================
  Version change: 0.0.0 (uninitialized) → 1.0.0
  Bump rationale: MAJOR — initial ratification of constitution for new project.

  Modified principles: None (all newly defined)

  Added sections:
    - Core Principles (5 principles)
    - Technology Constraints
    - Quality Standards
    - Governance

  Removed sections: None

  Templates requiring updates:
    - .specify/templates/plan-template.md      ✅ No changes needed (Constitution Check section is generic)
    - .specify/templates/spec-template.md       ✅ No changes needed (requirements alignment is generic)
    - .specify/templates/tasks-template.md      ✅ No changes needed (task categorization is generic)
    - .specify/templates/checklist-template.md  ✅ No changes needed (checklist is generic)

  Follow-up TODOs: None
-->

# IsTodayFriday Constitution

## Core Principles

### I. Vanilla-Only (NON-NEGOTIABLE)

All code MUST be written in vanilla HTML, CSS, and JavaScript. No frameworks, libraries, build tools, or bundlers are permitted. Every file must be directly servable by a static file server or opened in a browser without compilation.

Rationale: The project's purpose is trivial — a single yes/no answer about the day of the week. Introducing dependencies would add unnecessary complexity, increase load time, and create maintenance overhead for zero benefit.

### II. Single Purpose

The website MUST have exactly one function: answer whether the current day is Friday. No additional features, pages, navigation, or functionality may be added unless explicitly approved through a governance amendment.

Rationale: Scope creep is the primary risk for any project. This constraint keeps the codebase minimal, auditable, and instantly understandable.

### III. Client-Side Only (NON-NEGOTIABLE)

All logic MUST execute entirely in the browser. No server-side code, APIs, databases, or external services are permitted. The site must function when opened as a local `file://` URL with no network connection.

Rationale: The answer depends only on the user's local date. No external data is needed. Client-side-only ensures zero infrastructure cost, maximum reliability, and complete privacy.

### IV. Instant Load

The page MUST render its answer on initial load with no loading states, spinners, or deferred computation. The Friday check is a synchronous operation that must complete before the first paint.

Rationale: There is no justification for a loading state on a computation that takes microseconds. Users must see the answer immediately.

### V. Accessibility First

The answer MUST be perceivable by all users. Text must have sufficient color contrast, the page must be navigable via keyboard, and the result must be conveyed through semantic HTML (not color or styling alone).

Rationale: A simple site has no excuse for excluding users. Accessibility is easiest to build in from the start.

## Technology Constraints

- **HTML**: Semantic HTML5. No inline event handlers (`onclick`, etc.). Use `<time>` element for date display.
- **CSS**: Single stylesheet. No CSS-in-JS, preprocessors, or frameworks. Mobile-responsive by default.
- **JavaScript**: Single script file. ES6+ syntax allowed. No `eval()`, no external script sources. DOM manipulation only — no virtual DOM or reactive libraries.
- **No dependencies**: `package.json` must not exist. No `node_modules`, no CDN links, no third-party resources.
- **File structure**: Flat structure at minimum — `index.html`, `style.css`, `script.js`. No build directory or output artifacts.

## Quality Standards

- **Zero build step**: Files are served as-is. No transpilation, minification, or asset pipeline.
- **Manual testing only**: Verification is opening the file in a browser and confirming the correct answer displays. No test framework required for a project of this scope.
- **Cross-browser**: Must work in the latest stable versions of Chrome, Firefox, Safari, and Edge.
- **No console errors**: The browser developer console must show zero errors and zero warnings on load.
- **Self-contained**: The three files (HTML, CSS, JS) must be the complete deliverable. No images, fonts, or external assets.

## Governance

This constitution supersedes all other development practices for the project. Any change that violates a NON-NEGOTIABLE principle requires a formal amendment to this document before implementation.

Amendments require:
1. A documented rationale for the change.
2. Explicit user approval before merging.
3. Update to this file with incremented version and amended date.

Versioning follows semantic versioning:
- **MAJOR**: Removal or redefinition of a principle.
- **MINOR**: Addition of a new principle or section.
- **PATCH**: Clarifications, wording fixes, non-semantic refinements.

All changes must be verified by opening `index.html` in a browser and confirming the site correctly reports whether today is Friday.

**Version**: 1.0.0 | **Ratified**: 2026-04-05 | **Last Amended**: 2026-04-05
