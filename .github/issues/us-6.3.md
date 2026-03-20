## User Story

**As a** signed-in user,
**I want to** have my chat history and file changes saved automatically to the database,
**So that** I can close the browser and resume later without losing work.

## Description

When the AI finishes streaming a response, the system automatically saves the current chat messages and virtual file system state to the project record in the database. Messages are stored as JSON in the `messages` field, and file system state is stored as JSON in the `data` field.

## Screenshot Area

> **Location:** Not directly visible - happens automatically in the background
> - Save triggers after each AI response completes
> - No save button needed
> - Data persisted: chat messages + virtual file system state

## Acceptance Criteria

- [ ] Chat messages auto-save after AI response completes
- [ ] File system state auto-saves after AI response completes
- [ ] Saves only happen for authenticated users with a projectId
- [ ] Messages stored as JSON in database
- [ ] File system stored as JSON in database
- [ ] No data loss on browser close/refresh after save

## Key Files

| File | Purpose |
|------|---------|
| `src/app/api/chat/route.ts` | auto-save on onFinish callback |
| `src/actions/create-project.ts` | createProject mutation for persistence |
| `prisma/schema.prisma` | Project model with messages and data JSON fields |

## Parent EPIC
EPIC 6: Project Management (#23)
