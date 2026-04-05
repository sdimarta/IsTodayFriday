# Research: Friday Check Landing Page

## Decision: Midnight Auto-Refresh Mechanism

**Rationale**: Use `setTimeout` to calculate the exact milliseconds until the next midnight, then reload the page once. This is more efficient than `setInterval` polling every second, avoids unnecessary CPU wake-ups, and guarantees the refresh happens precisely at midnight.

```javascript
function scheduleMidnightRefresh() {
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const msUntilMidnight = tomorrow.getTime() - now.getTime();
  setTimeout(() => location.reload(), msUntilMidnight);
}
```

**Alternatives considered**:
- `setInterval` checking every 60 seconds — wasteful CPU cycles for a trivial page
- `visibilitychange` API to only refresh when tab is visible — adds complexity for minimal benefit
- No auto-refresh — rejected by user during clarification phase

## Decision: Day-of-Week Detection

**Rationale**: Use `Date.prototype.getDay()` which returns 0–6 (Sunday=0, Friday=5). This is universally supported across all browsers and requires no external libraries. The `Date` constructor with no arguments uses the system's local timezone automatically.

```javascript
const isFriday = new Date().getDay() === 5;
```

**Alternatives considered**:
- `Intl.DateTimeFormat` with `weekday` option — more verbose, unnecessary for a simple numeric check
- Server-side time fetch — violates "Client-Side Only" constitution principle

## Decision: Emoji Accessibility for Screen Readers

**Rationale**: Emojis are read aloud by screen readers with their Unicode names (🥳 = "partying face", 😢 = "crying face"). To ensure the emotional intent is clear regardless of screen reader behavior, wrap each emoji in a `<span>` with `role="img"` and `aria-label` matching the text sentiment. This makes the emoji an accessible image with an explicit label.

```html
<span role="img" aria-label="celebration">🥳</span>
<span role="img" aria-label="sadness">😢</span>
```

**Alternatives considered**:
- `aria-hidden="true"` on emoji — hides it from screen readers entirely, losing the visual reinforcement for assistive tech users
- No ARIA attributes — relies on screen reader's default emoji name, which may not match the intended sentiment clearly
- Text-only with no emoji — rejected; user explicitly requested emoticons

## Decision: `<noscript>` Fallback Content

**Rationale**: Place a `<noscript>` block in the HTML body with the message "Sorry, we can't tell you if today is Friday without JavaScript." styled to be visible and centered. This requires no JavaScript execution and provides a clear explanation.

**Alternatives considered**:
- Server-rendered fallback — violates "Client-Side Only" constitution principle
- Redirect to a non-JS version — adds complexity, no server available

## Decision: CSS Styling Approach

**Rationale**: Single `style.css` file with a centered flexbox layout, system font stack, and responsive design using relative units (`rem`, `vh`). No media queries needed beyond basic font-size scaling — the layout is a single centered text block that naturally adapts to any screen width.

**Alternatives considered**:
- Inline styles in HTML — violates constitution's "No inline event handlers" spirit and mixes concerns
- CSS-in-JS — violates "Vanilla-Only" principle (no build tools)
- Multiple stylesheets — unnecessary for a single-page site
