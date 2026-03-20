## User Story

**As a** new user,
**I want to** see a friendly welcome screen with instructions before generating my first component,
**So that** I know how to get started.

## Description

When no files have been generated yet, the preview area shows a welcoming screen with a lightning bolt icon, the title "Welcome to UI Generator", and instructional text guiding users to use the AI chat.

## Screenshot Area

> **Location:** Right panel (65% width) - Preview area before any generation
> - Lightning bolt icon (centered)
> - Title: "Welcome to UI Generator"
> - Subtitle: "Start building React components with AI assistance"
> - Help text: "Ask the AI to create your first component to see it live here"
> - Clean white/gray background

## Acceptance Criteria

- [ ] Welcome screen displays on first load
- [ ] Lightning bolt icon is visible
- [ ] Title and help text guide the user
- [ ] Welcome screen disappears once first component is generated

## Key Files

| File | Purpose |
|------|---------|
| `src/components/preview/PreviewFrame.tsx` | Welcome state conditional rendering |

## Parent EPIC
EPIC 2: Live Preview (#7)
