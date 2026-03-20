## User Story

**As a** visitor,
**I want to** create an account with email and password,
**So that** I can save my projects and access them later.

## Description

The sign-up flow opens a modal dialog with email, password, and confirm password fields. Password requires minimum 8 characters. On success, a JWT session is created (7-day expiry), stored as an HTTP-only cookie, and the user is redirected to their first project. Any anonymous work is migrated to the new account.

## Screenshot Area

> **Location:** Modal dialog overlay (centered on screen)
> - Title: "Create an account"
> - Subtitle: "Sign up to start creating AI-powered React components"
> - Email input field (required)
> - Password input field (min 8 chars, with help text)
> - Confirm Password input field
> - "Sign Up" button (shows "Creating account..." while loading)
> - Toggle link: "Already have an account? Sign in" at bottom

## Acceptance Criteria

- [ ] Modal opens when "Sign Up" button clicked in header
- [ ] Email field validates email format
- [ ] Password requires minimum 8 characters
- [ ] Confirm password must match password
- [ ] Error messages shown for validation failures
- [ ] Loading state disables all inputs
- [ ] Successful signup creates JWT session cookie
- [ ] User is redirected to first project after signup
- [ ] Anonymous work is migrated to new account

## Key Files

| File | Purpose |
|------|---------|
| `src/components/auth/AuthDialog.tsx` | Modal dialog container with sign-up/sign-in toggle |
| `src/components/auth/SignUpForm.tsx` | Registration form with validation |
| `src/actions/index.ts` | signUp server action (bcrypt hashing) |
| `src/lib/auth.ts` | JWT session creation |
| `src/hooks/use-auth.ts` | Post-auth routing + anonymous work migration |

## Parent EPIC
EPIC 5: Authentication (#17)
