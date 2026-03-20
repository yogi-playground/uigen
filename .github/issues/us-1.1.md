## User Story

**As a** user,
**I want to** describe a React component in natural language,
**So that** the AI generates working code automatically.

## Description

The user types a component description into the chat textarea. The AI processes this via the Google Gemini model, generates React/JSX code using tool calls, and creates the component files in the virtual file system. The generated component is immediately visible in the live preview.

## Screenshot Area

> **Location:** Left panel (35% width) - Chat interface
> - Bottom: Textarea input with send button (paper plane icon)
> - Center: Message bubbles - user (blue, right-aligned), AI (white, left-aligned with bot icon)
> - AI responses include markdown-formatted text and tool call status indicators

## Acceptance Criteria

- [ ] User can type a component description in the chat textarea
- [ ] Pressing Enter sends the message (Shift+Enter for new line)
- [ ] AI generates React/JSX component code
- [ ] Generated files appear in the file tree
- [ ] Generated component renders in the live preview
- [ ] Chat shows AI reasoning and response in markdown format
- [ ] Input is disabled while AI is generating

## Key Files

| File | Purpose |
|------|---------|
| `src/components/chat/ChatInterface.tsx` | Chat container with scroll area |
| `src/components/chat/MessageInput.tsx` | Textarea + send button |
| `src/components/chat/MessageList.tsx` | Message rendering |
| `src/lib/contexts/chat-context.tsx` | Chat state management |
| `src/app/api/chat/route.ts` | AI streaming endpoint |
| `src/lib/prompts/generation.tsx` | System prompt for AI |

## Parent EPIC
EPIC 1: AI-Powered Component Generation (#2)
