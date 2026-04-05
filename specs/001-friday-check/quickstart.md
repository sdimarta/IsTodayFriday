# Quickstart: Friday Check Landing Page

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge — latest stable)
- No server, no build tools, no dependencies

## Running Locally

1. Open `index.html` directly in your browser (double-click the file, or drag it into a browser tab)
2. The page will immediately display whether today is Friday

That's it. No installation, no `npm install`, no build step.

## Verifying Correctness

1. **On a Friday**: Confirm the page shows "Yes, today is Friday." with 🥳
2. **On any other day**: Confirm the page shows "No, today is not Friday." with 😢
3. **With JavaScript disabled**: Confirm the fallback message "Sorry, we can't tell you if today is Friday without JavaScript." appears
4. **Browser console**: Open DevTools (F12) and confirm zero errors and zero warnings

## File Structure

```
index.html    ← Main page, semantic HTML with <noscript> fallback
style.css     ← Centered layout, responsive, accessible contrast
script.js     ← Day detection, DOM update, midnight auto-refresh
```
