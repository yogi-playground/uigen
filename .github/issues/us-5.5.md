## User Story

**As a** visitor who created components anonymously,
**I want to** have my work preserved when I sign up,
**So that** I do not lose any progress.

## Description

When an anonymous user signs up, the system checks sessionStorage for any existing work (chat messages and file system state). If anonymous work exists, it is migrated into a new project under the user's account. The sessionStorage is then cleared.

## Screenshot Area

> **Location:** Not directly visible - happens automatically during sign-up flow
> - Before: Anonymous user has generated components (visible in chat + preview)
> - After signup: Same chat history and files now saved as a project under their account
> - Project appears in project selector dropdown

## Acceptance Criteria

- [ ] Anonymous work (messages + files) stored in sessionStorage during anonymous use
- [ ] On sign-up, anonymous work is checked
- [ ] If anonymous work exists, it is saved as a new project
- [ ] Chat history is preserved in the migrated project
- [ ] File system state is preserved in the migrated project
- [ ] sessionStorage is cleared after migration
- [ ] User is redirected to the migrated project

## Key Files

| File | Purpose |
|------|---------|
| `src/lib/anon-work-tracker.ts` | setHasAnonWork, getAnonWorkData, clearAnonWork functions |
| `src/hooks/use-auth.ts` | Migration logic on successful auth |

## Parent EPIC
EPIC 5: Authentication (#17)
