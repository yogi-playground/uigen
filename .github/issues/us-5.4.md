## User Story

**As a** visitor,
**I want to** use the full app without creating an account,
**So that** I can try the AI component generator immediately.

## Description

Anonymous users can access the app at the root URL and use all features: chat with AI, generate components, edit code, and view previews. Their work is temporarily stored in browser sessionStorage. The header shows Sign In and Sign Up buttons instead of project management controls.

## Screenshot Area

> **Location:** Full app at root URL (/)
> - Left panel: Chat interface fully functional
> - Right panel: Preview and Code tabs functional
> - Header: Shows "Sign In" and "Sign Up" buttons (no project selector)
> - Work persists in browser session only

## Acceptance Criteria

- [ ] App is fully functional at / without authentication
- [ ] Chat, preview, and code editing all work
- [ ] Header shows Sign In / Sign Up buttons
- [ ] Work is stored in sessionStorage
- [ ] Work is lost when browser session ends (unless user signs up)

## Key Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Anonymous user rendering path |
| `src/lib/anon-work-tracker.ts` | sessionStorage persistence |
| `src/components/HeaderActions.tsx` | Conditional header rendering |

## Parent EPIC
EPIC 5: Authentication (#17)
