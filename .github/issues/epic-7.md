## EPIC 7: Application Layout and UX

Responsive layout with resizable panels, tab navigation, and formatted AI responses.

### User Stories

- [ ] US-7.1: Resize Chat and Preview Panels
- [ ] US-7.2: Switch Between Preview and Code Tabs
- [ ] US-7.3: View Formatted AI Responses with Code Blocks

### Key Files
- `src/app/main-content.tsx` - Three-panel resizable layout with tabs
- `src/components/ui/resizable.tsx` - Resizable panel primitive
- `src/components/chat/MarkdownRenderer.tsx` - Markdown + code block rendering
- `src/components/chat/MessageList.tsx` - Message display with formatting
