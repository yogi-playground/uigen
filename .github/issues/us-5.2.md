## User Story

**As a** returning user,
**I want to** sign in with my email and password,
**So that** I can access my saved projects.

## Description

The sign-in flow opens a modal dialog with email and password fields. On success, a JWT session is created and the user is redirected to their most recent project (or a new project is created if none exist).

## Screenshot Area

> **Location:** Modal dialog overlay (centered on screen)
> - Title: "Welcome back"
> - Subtitle: "Sign in to your account to continue"
> - Email input field
> - Password input field
> - "Sign In" button (shows "Signing in..." while loading)
> - Toggle link: "Don't have an account? Sign up" at bottom

## Acceptance Criteria

- [ ] Modal opens when "Sign In" button clicked in header
- [ ] Email and password fields are required
- [ ] Error message shown for invalid credentials (generic message for security)
- [ ] Loading state disables inputs during authentication
- [ ] Successful login redirects to most recent project
- [ ] If no projects exist, creates a new default project

## Key Files

| File | Purpose |
|------|---------|
| `src/components/auth/AuthDialog.tsx` | Modal dialog container |
| `src/components/auth/SignInForm.tsx` | Login form |
| `src/actions/index.ts` | signIn server action (bcrypt comparison) |
| `src/lib/auth.ts` | JWT session creation |
| `src/hooks/use-auth.ts` | Post-auth routing logic |

## Parent EPIC
EPIC 5: Authentication (#17)
