## User Story

**As a** user,
**I want to** drag panel borders to resize the chat and preview/editor areas,
**So that** I can optimize my workspace for my current task.

## Description

The main layout uses ResizablePanelGroup to create draggable panel borders. The left panel (chat) defaults to 35% width (min 25%, max 50%), and the right panel (preview/code) takes the remaining space. In code view, the file tree and editor also have a resizable split (30%/70%).

## Screenshot Area

> **Location:** Main application layout
> - Vertical drag handle between left (chat) and right (preview/code) panels
> - In Code view: horizontal drag handle between file tree and editor
> - Panels resize smoothly on drag
> - Minimum widths prevent panels from collapsing completely

## Acceptance Criteria

- [ ] Drag handle visible between chat and preview panels
- [ ] Dragging resizes panels proportionally
- [ ] Minimum and maximum widths are enforced
- [ ] Code view has additional resizable split (file tree / editor)
- [ ] Panels maintain proportions on window resize

## Key Files

| File | Purpose |
|------|---------|
| `src/app/main-content.tsx` | ResizablePanelGroup layout configuration |
| `src/components/ui/resizable.tsx` | Resizable panel primitive component |

## Parent EPIC
EPIC 7: Application Layout and UX (#28)
