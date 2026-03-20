## EPIC 2: Live Preview

Real-time rendering of generated React components in an isolated iframe with Tailwind CSS support.

### User Stories

- [ ] US-2.1: View Live Preview of Generated Component
- [ ] US-2.2: See Welcome Screen Before First Generation
- [ ] US-2.3: Preview Auto-Refreshes on Code Change

### Key Files
- `src/components/preview/PreviewFrame.tsx` - Iframe-based preview renderer
- `src/lib/transform/jsx-transformer.ts` - Babel JSX transform + import map generation
- `src/lib/contexts/file-system-context.tsx` - Refresh trigger state
