## User Story

**As a** signed-in user,
**I want to** see all my projects in a searchable list and switch between them,
**So that** I can work on different component designs.

## Description

A project selector in the header (folder icon) opens a popover dropdown showing all user projects sorted by most recent. The list is filterable by name. Clicking a project navigates to its page. The list auto-refreshes when opened.

## Screenshot Area

> **Location:** Top header bar (right side, when authenticated)
> - Folder icon button opens popover
> - Shows current project name at top
> - Search/filter input field
> - Scrollable list of all projects with names
> - Click any project to navigate to it

## Acceptance Criteria

- [ ] Folder icon opens project selector popover
- [ ] Shows all user projects sorted by most recent
- [ ] Search/filter input filters projects by name
- [ ] Clicking a project navigates to /[projectId]
- [ ] Project list refreshes when popover opens
- [ ] Current project is visually indicated

## Key Files

| File | Purpose |
|------|---------|
| `src/components/HeaderActions.tsx` | Project selector popover with search |
| `src/actions/get-projects.ts` | getProjects server action |

## Parent EPIC
EPIC 6: Project Management (#23)
