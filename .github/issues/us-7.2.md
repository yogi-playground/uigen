## User Story

**As a** user,
**I want to** toggle between "Preview" and "Code" tabs in the right panel,
**So that** I can switch between viewing the rendered component and editing its source code.

## Description

The right panel header has two tabs: "Preview" and "Code". The Preview tab shows the live iframe rendering of the component. The Code tab shows a split view with file tree on the left and Monaco editor on the right.

## Screenshot Area

> **Location:** Top of right panel (65% width area)
> - Two tab buttons: "Preview" (active by default) and "Code"
> - Active tab has distinct styling (bold/colored)
> - Preview tab: Full iframe preview
> - Code tab: File tree (left 30%) + Code editor (right 70%)

## Acceptance Criteria

- [ ] Two tabs visible: "Preview" and "Code"
- [ ] Preview tab is active by default
- [ ] Clicking Code tab shows file tree + editor split
- [ ] Clicking Preview tab shows live component rendering
- [ ] Active tab has visual distinction
- [ ] Tab state persists during session

## Key Files

| File | Purpose |
|------|---------|
| `src/app/main-content.tsx` | activeView state + tab button rendering |

## Parent EPIC
EPIC 7: Application Layout and UX (#28)
