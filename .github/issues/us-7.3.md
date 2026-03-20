## User Story

**As a** user,
**I want to** see AI responses rendered with proper markdown formatting and syntax-highlighted code blocks,
**So that** the responses are easy to read and understand.

## Description

AI responses are rendered using react-markdown with prose styling. Inline code gets a gray background with monospace font. Code blocks get language-specific syntax highlighting. The markdown renderer handles headers, lists, links, bold, italic, and other standard markdown elements.

## Screenshot Area

> **Location:** Left panel - Inside AI assistant message bubbles
> - Markdown text with proper heading sizes
> - Inline code with gray background: `example`
> - Code blocks with syntax coloring and language detection
> - Lists, bold, italic text properly formatted
> - Prose typography for readability

## Acceptance Criteria

- [ ] Markdown text renders with proper formatting (headers, lists, bold, italic)
- [ ] Inline code has distinct styling (gray background, monospace)
- [ ] Code blocks have syntax highlighting
- [ ] Links are clickable
- [ ] Prose styling applied for readable typography
- [ ] Long code blocks are scrollable

## Key Files

| File | Purpose |
|------|---------|
| `src/components/chat/MarkdownRenderer.tsx` | react-markdown with custom renderers |
| `src/components/chat/MessageList.tsx` | Uses MarkdownRenderer for assistant messages |

## Parent EPIC
EPIC 7: Application Layout and UX (#28)
