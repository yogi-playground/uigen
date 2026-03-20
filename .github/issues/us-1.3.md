## User Story

**As a** user,
**I want to** choose between different Gemini models (Flash-Lite, Flash, Pro),
**So that** I can balance speed vs capability for my generation needs.

## Description

A dropdown selector in the chat header allows switching between three Google Gemini AI models. The selection persists during the session and affects all subsequent AI requests.

## Screenshot Area

> **Location:** Left panel header - Small dropdown to the right of "React Component Generator" title
> - Shows current model name
> - Dropdown lists: Gemini 2.5 Flash-Lite (default), Gemini 2.5 Flash, Gemini 2.5 Pro
> - Styled as a subtle bordered select with blue focus ring

## Acceptance Criteria

- [ ] Dropdown shows all three available models
- [ ] Default model is Gemini 2.5 Flash-Lite
- [ ] Changing model immediately applies to next AI request
- [ ] Selected model persists during session
- [ ] Dropdown is accessible and styled consistently

## Key Files

| File | Purpose |
|------|---------|
| `src/components/chat/ModelSelector.tsx` | Dropdown UI component |
| `src/lib/models.ts` | Available models list and types |
| `src/lib/provider.ts` | Provider selection based on model ID |

## Parent EPIC
EPIC 1: AI-Powered Component Generation (#2)
