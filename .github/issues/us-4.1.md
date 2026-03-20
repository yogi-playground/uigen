## User Story

**As a** user,
**I want to** have the AI automatically create, modify, and organize files in a virtual file system,
**So that** my project structure is managed without manual file operations.

## Description

The AI uses two tools (`str_replace_editor` and `file_manager`) to manipulate files during component generation. Files are stored in-memory as hierarchical FileNode objects. The `str_replace_editor` tool supports creating new files, replacing text in existing files, inserting lines at specific positions, and viewing file contents. All operations happen in the virtual file system (no disk writes).

## Screenshot Area

> **Location:** Visible in two areas:
> 1. Chat panel: Tool call indicators show "Creating App.jsx", "Updating styles.css"
> 2. File tree: New files appear automatically after AI creates them
> 3. Code editor: File content is immediately available to edit

## Acceptance Criteria

- [ ] AI can create new files with content via `str_replace_editor` create command
- [ ] AI can modify files via `str_replace_editor` str_replace command
- [ ] AI can insert lines at positions via `str_replace_editor` insert command
- [ ] Parent directories are auto-created when creating nested files
- [ ] File tree updates when new files are created
- [ ] Created files are immediately available in editor and preview
- [ ] File system serializes/deserializes for database persistence

## Key Files

| File | Purpose |
|------|---------|
| `src/lib/file-system.ts` | VirtualFileSystem class with CRUD operations |
| `src/lib/tools/str-replace.ts` | AI tool for code editing (5 commands) |
| `src/lib/contexts/file-system-context.tsx` | Tool call handling + state management |

## Parent EPIC
EPIC 4: Virtual File System (#14)
