## User Story

**As a** new user without a Google API key,
**I want to** see demo component generation,
**So that** I can evaluate the app before setting up an API key.

## Description

When no `GOOGLE_GENERATIVE_AI_API_KEY` environment variable is set, the app falls back to a MockLanguageModel that generates preset demo components (Counter, ContactForm, Card). The mock provider simulates realistic tool-calling behavior with streaming delays, creating a convincing demo experience.

## Screenshot Area

> **Location:** Same chat interface as regular usage
> - AI generates a preset Counter/ContactForm/Card component
> - Tool calls appear with same status indicators
> - Preview shows the demo component rendered
> - User cannot tell difference from real AI (seamless fallback)

## Acceptance Criteria

- [ ] App functions without GOOGLE_GENERATIVE_AI_API_KEY set
- [ ] Mock provider generates realistic demo components
- [ ] Tool calls simulate file creation sequence
- [ ] Streaming delays create natural-feeling responses
- [ ] Generated demo components render correctly in preview
- [ ] Max 4 tool steps to prevent infinite loops

## Key Files

| File | Purpose |
|------|---------|
| `src/lib/provider.ts` | MockLanguageModel class with demo sequences |

## Parent EPIC
EPIC 1: AI-Powered Component Generation (#2)
