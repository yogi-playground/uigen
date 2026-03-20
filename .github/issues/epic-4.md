## EPIC 4: Virtual File System

In-memory file management system that stores project files without writing to disk, enabling AI tool operations and browser-based editing.

### User Stories

- [ ] US-4.1: AI Creates Project Files Automatically
- [ ] US-4.2: Rename and Delete Project Files

### Key Files
- `src/lib/file-system.ts` - VirtualFileSystem class
- `src/lib/tools/str-replace.ts` - Code editing tool (create, str_replace, insert, view)
- `src/lib/tools/file-manager.ts` - File operations tool (rename, delete)
- `src/lib/contexts/file-system-context.tsx` - React context + tool call handling
