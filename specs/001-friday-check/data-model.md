# Data Model: Friday Check Landing Page

## Entities

This feature has no persistent data entities. The only runtime value is the **Current Day**, which is derived from the browser's `Date` object at page load and at midnight refresh. It is not stored, transmitted, or persisted.

### Runtime Value: Current Day

| Attribute | Type | Source | Notes |
|-----------|------|--------|-------|
| dayOfWeek | Integer (0-6) | `new Date().getDay()` | 0=Sunday, 5=Friday, 6=Saturday |
| isFriday | Boolean | `dayOfWeek === 5` | Derived, not stored |
| msUntilMidnight | Integer | Calculated from `Date` | Used for `setTimeout` scheduling |

## Validation Rules

- No user input is accepted; no validation required
- The `Date` API is trusted; no external data validation needed

## State Transitions

```
Page Load → Determine Day → Render Answer → Schedule Midnight Refresh
                                                        ↓
                                                Midnight → Page Reload → (back to Page Load)
```
