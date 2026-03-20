## User Story

**As a** user,
**I want to** have files renamed and deleted as the AI organizes the project,
**So that** the project structure stays clean and well-organized.

## Description

The `file_manager` tool provides rename and delete operations. Rename moves files (including updating all child paths for directories) and auto-creates parent directories at the new location. Delete removes files or entire directories recursively.

## Screenshot Area

> **Location:** File tree panel
> - Files disappear when deleted
> - File names change when renamed
> - Directory structures update accordingly

## Acceptance Criteria

- [ ] AI can rename/move files via `file_manager` rename command
- [ ] AI can delete files via `file_manager` delete command
- [ ] Renaming auto-creates parent directories at new path
- [ ] Deleting directories removes all children recursively
- [ ] File tree updates after rename/delete operations
- [ ] Editor switches file if currently-open file is renamed/deleted

## Key Files

| File | Purpose |
|------|---------|
| `src/lib/tools/file-manager.ts` | Rename and delete tool implementations |
| `src/lib/file-system.ts` | VirtualFileSystem rename/delete methods |

## Parent EPIC
EPIC 4: Virtual File System (#14)
