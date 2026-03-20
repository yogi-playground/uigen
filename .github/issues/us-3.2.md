## User Story

**As a** user,
**I want to** see all project files in an expandable hierarchical tree,
**So that** I can navigate and select files to edit.

## Description

The file tree shows a hierarchical view of all files and directories in the virtual file system. Directories are collapsible with chevron icons, files show code file icons, and the currently selected file is highlighted in blue. Directories appear first (alphabetically), then files.

## Screenshot Area

> **Location:** Right panel when "Code" tab is active - Left side (30% width)
> - Expandable folder tree with chevron arrows
> - Folder icons (open/closed state)
> - File code icons (gray)
> - Blue highlight on selected file
> - Scrollable area for long file lists
> - Empty state: Folder icon + "No files yet" message

## Acceptance Criteria

- [ ] Files and folders display in hierarchical tree
- [ ] Directories are collapsible (default expanded)
- [ ] Clicking a file opens it in the code editor
- [ ] Selected file is highlighted in blue
- [ ] Directories sort before files (both alphabetically)
- [ ] Tree updates when AI creates/deletes files
- [ ] Empty state shown when no files exist

## Key Files

| File | Purpose |
|------|---------|
| `src/components/editor/FileTree.tsx` | Recursive tree rendering with expand/collapse |

## Parent EPIC
EPIC 3: Code Editor (#11)
