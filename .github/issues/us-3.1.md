## User Story

**As a** user,
**I want to** edit the generated code in a professional editor with syntax highlighting and line numbers,
**So that** I can make manual adjustments to the AI-generated components.

## Description

The code editor panel uses Monaco Editor (same engine as VS Code) with dark theme, line numbers, word wrapping, and real-time file updates. When a user selects a file from the file tree, it opens in the editor. Changes are immediately saved to the virtual file system and trigger a preview refresh.

## Screenshot Area

> **Location:** Right panel when "Code" tab is active - Right side (70% width)
> - Dark-themed Monaco editor (vs-dark theme)
> - Line numbers on the left
> - Syntax-colored code (JSX/TypeScript/CSS/JSON)
> - 14px font size, word wrap enabled
> - Empty state: Code icon + "Select a file to edit" message

## Acceptance Criteria

- [ ] Monaco editor renders with dark theme
- [ ] Line numbers are visible
- [ ] Word wrapping is enabled
- [ ] Code changes auto-save to virtual file system
- [ ] Preview updates when code is edited
- [ ] Empty state shows when no file is selected
- [ ] Editor auto-layouts on panel resize

## Key Files

| File | Purpose |
|------|---------|
| `src/components/editor/CodeEditor.tsx` | Monaco Editor integration with auto-save |

## Parent EPIC
EPIC 3: Code Editor (#11)
