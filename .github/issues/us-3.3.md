## User Story

**As a** user,
**I want to** see proper syntax highlighting automatically based on the file type,
**So that** different languages (JSX, CSS, JSON, TypeScript) are easy to read.

## Description

The Monaco editor automatically detects the programming language from the file extension and applies appropriate syntax highlighting. Supported extensions: .js/.jsx (JavaScript), .ts/.tsx (TypeScript), .css (CSS), .json (JSON), .html (HTML), .md (Markdown).

## Screenshot Area

> **Location:** Right panel - Code editor area
> - JSX files show React component syntax coloring (keywords, strings, JSX tags)
> - CSS files show property/value coloring
> - JSON files show key/value coloring
> - Language auto-detected from file extension

## Acceptance Criteria

- [ ] JSX/JS files detected as JavaScript
- [ ] TSX/TS files detected as TypeScript
- [ ] CSS files detected as CSS
- [ ] JSON files detected as JSON
- [ ] HTML files detected as HTML
- [ ] Language switches automatically when selecting different files

## Key Files

| File | Purpose |
|------|---------|
| `src/components/editor/CodeEditor.tsx` | Language detection from file extension mapping |

## Parent EPIC
EPIC 3: Code Editor (#11)
