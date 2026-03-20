## EPIC 5: Authentication

User registration, login, session management, and anonymous usage with work migration.

### User Stories

- [ ] US-5.1: Create New Account
- [ ] US-5.2: Sign In to Existing Account
- [ ] US-5.3: Sign Out of Account
- [ ] US-5.4: Use App Without Signing In
- [ ] US-5.5: Preserve Work Created Before Signing Up

### Key Files
- `src/components/auth/AuthDialog.tsx` - Auth modal container
- `src/components/auth/SignUpForm.tsx` - Registration form
- `src/components/auth/SignInForm.tsx` - Login form
- `src/components/HeaderActions.tsx` - Sign in/out buttons
- `src/lib/auth.ts` - JWT session management
- `src/hooks/use-auth.ts` - Client auth hook
- `src/actions/index.ts` - Server actions (signUp, signIn, signOut)
- `src/lib/anon-work-tracker.ts` - Anonymous work persistence
- `src/middleware.ts` - Route protection
