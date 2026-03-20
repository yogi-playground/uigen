## User Story

**As a** user,
**I want to** see which files the AI is creating or modifying in real-time,
**So that** I understand the generation progress.

## Description

During AI component generation, the chat shows tool execution indicators inside assistant message bubbles. Each tool call (file create, update, rename) is displayed with a status icon: animated spinner while pending, green checkmark when complete.

## Screenshot Area

> **Location:** Left panel - Inside assistant chat bubbles
> - Shows lines like: "Creating App.jsx" with green checkmark
> - Shows lines like: "Updating Counter.jsx" with animated spinner (while in progress)
> - Tool names tracked: `str_replace_editor`, `file_manager`

## Acceptance Criteria

- [ ] Tool calls show pending state with animated loader
- [ ] Tool calls show completed state with green checkmark
- [ ] File creation shows "Creating [filename]"
- [ ] File updates show "Updating [filename]"
- [ ] Multiple tool calls display in sequence within a single message

## Key Files

| File | Purpose |
|------|---------|
| `src/components/chat/MessageList.tsx` | Renders tool invocations with status indicators |

## Parent EPIC
EPIC 1: AI-Powered Component Generation (#2)
