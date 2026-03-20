Run a full security audit, apply fixes, and verify nothing is broken.

Follow these steps in order:

## Step 1 — Audit
Run `npm audit` and show a summary of vulnerabilities found (critical, high, moderate, low counts).
If no vulnerabilities found, say so and skip to Step 3.

## Step 2 — Fix
Run `npm audit fix`.
If there are remaining vulnerabilities that require `--force`, pause and show the user:
- What packages are affected
- What breaking changes would occur
Ask the user: "These fixes require --force and may include breaking changes. Proceed?" before running `npm audit fix --force`.

## Step 3 — Run Tests
Run `npm run test` and report results.

## Step 4 — Report
Print a final summary table:

```
Audit Report — <date>
─────────────────────────────────────────
Before fix:   X critical, X high, X moderate, X low
After fix:    X critical, X high, X moderate, X low
Fixed:        X vulnerabilities resolved

Tests:        ✓ All passed  /  ✗ X failed
─────────────────────────────────────────
Status: CLEAN ✓  /  ACTION NEEDED ✗
```

If any tests failed after the fix, clearly state which tests broke and suggest the likely cause (dependency version change).
