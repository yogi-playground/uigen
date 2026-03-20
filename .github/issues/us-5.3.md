## User Story

**As a** signed-in user,
**I want to** sign out of my account,
**So that** my session is ended securely.

## Description

A sign out button in the header clears the JWT auth cookie and redirects the user to the home page. The sign out action invalidates the session server-side by deleting the HTTP-only cookie.

## Screenshot Area

> **Location:** Top header bar (right side)
> - Sign out button visible only when user is authenticated
> - Click triggers immediate sign out + redirect to home

## Acceptance Criteria

- [ ] Sign out button visible when authenticated
- [ ] Clicking sign out clears the auth cookie
- [ ] User is redirected to the home page
- [ ] Subsequent requests are unauthenticated

## Key Files

| File | Purpose |
|------|---------|
| `src/components/HeaderActions.tsx` | Sign out button in header |
| `src/actions/index.ts` | signOut server action (cookie deletion) |

## Parent EPIC
EPIC 5: Authentication (#17)
