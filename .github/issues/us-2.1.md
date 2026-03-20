## User Story

**As a** user,
**I want to** see my generated React component rendered live in the browser,
**So that** I can verify it looks and works correctly without any manual build step.

## Description

The right panel displays a live preview of the generated React component inside a sandboxed iframe. The system auto-detects the entry point (App.jsx, App.tsx, index.jsx, etc.), transforms JSX via Babel, generates an import map for dependencies (using esm.sh CDN), and injects Tailwind CSS. The preview updates automatically as files change.

## Screenshot Area

> **Location:** Right panel (65% width) when "Preview" tab is active
> - Full iframe rendering of the generated component
> - Tailwind CSS styling applied
> - Interactive elements (buttons, forms) are functional within the iframe
> - Sandboxed with allow-scripts, allow-same-origin, allow-forms

## Acceptance Criteria

- [ ] Generated component renders in an iframe
- [ ] Entry point is auto-detected (App.jsx priority)
- [ ] JSX is transformed via Babel for browser execution
- [ ] Third-party imports resolve via esm.sh CDN
- [ ] Tailwind CSS classes work in the preview
- [ ] Preview is sandboxed for security
- [ ] Transform errors display helpful messages

## Key Files

| File | Purpose |
|------|---------|
| `src/components/preview/PreviewFrame.tsx` | Iframe with srcdoc rendering |
| `src/lib/transform/jsx-transformer.ts` | Babel transform + import map + HTML generation |

## Parent EPIC
EPIC 2: Live Preview (#7)
