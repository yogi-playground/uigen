## User Story

**As a** signed-in user,
**I want to** create a new empty project,
**So that** I can start a fresh component design.

## Description

Clicking the "+" button in the header creates a new project with a random name (e.g., "Design #12345"), saves it to the database, and navigates the user to the new project page.

## Screenshot Area

> **Location:** Top header bar (right side, when authenticated)
> - "+" (Plus) icon button
> - Creates project with auto-generated name
> - Immediately navigates to new project URL (/[projectId])

## Acceptance Criteria

- [ ] Plus button visible in header when authenticated
- [ ] Clicking creates a new project in the database
- [ ] Project gets a random name like "Design #12345"
- [ ] User is navigated to the new project page
- [ ] New project starts with empty chat and no files

## Key Files

| File | Purpose |
|------|---------|
| `src/components/HeaderActions.tsx` | New design button with Plus icon |
| `src/actions/create-project.ts` | createProject server action |

## Parent EPIC
EPIC 6: Project Management (#23)
