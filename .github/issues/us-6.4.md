## User Story

**As a** returning user,
**I want to** open a saved project and see my chat history and files restored,
**So that** I can continue where I left off.

## Description

When navigating to /[projectId], the system loads the project from the database, parses the JSON messages and file system data, and restores the full state. The chat shows previous messages, the file tree shows all files, and the preview renders the component.

## Screenshot Area

> **Location:** Full app interface after navigating to a saved project
> - Chat panel: Previous messages restored with full history
> - File tree: All previously created files visible
> - Preview: Component renders from restored file system
> - Code editor: Files available to open and edit

## Acceptance Criteria

- [ ] Navigating to /[projectId] loads project from database
- [ ] Chat history is fully restored with user and AI messages
- [ ] File system state is fully restored
- [ ] Preview renders the component from restored files
- [ ] File tree shows all project files
- [ ] Unauthorized access redirects to home
- [ ] Invalid project ID shows error

## Key Files

| File | Purpose |
|------|---------|
| `src/app/[projectId]/page.tsx` | Project page with data loading |
| `src/actions/get-project.ts` | getProject server action with JSON parsing |

## Parent EPIC
EPIC 6: Project Management (#23)
