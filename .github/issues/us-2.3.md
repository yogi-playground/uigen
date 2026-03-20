## User Story

**As a** user,
**I want to** see the preview update automatically when I edit code in the editor or the AI generates new files,
**So that** I see changes instantly without manual refresh.

## Description

The preview iframe re-renders whenever the virtual file system changes. This is triggered by a `refreshTrigger` state in the FileSystemContext that increments on every file create, update, delete, or rename operation. Both AI tool calls and manual editor changes trigger the refresh.

## Screenshot Area

> **Location:** Right panel - Preview iframe
> - Updates in real-time as code changes in the editor
> - Updates when AI creates/modifies files via tool calls
> - No manual refresh button needed

## Acceptance Criteria

- [ ] Preview updates when AI creates new files
- [ ] Preview updates when AI modifies existing files
- [ ] Preview updates when user edits code in Monaco editor
- [ ] No manual refresh action required
- [ ] Preview detects new entry point if current one is deleted

## Key Files

| File | Purpose |
|------|---------|
| `src/components/preview/PreviewFrame.tsx` | refreshTrigger dependency triggers re-render |
| `src/lib/contexts/file-system-context.tsx` | refreshTrigger state incremented on file changes |

## Parent EPIC
EPIC 2: Live Preview (#7)
