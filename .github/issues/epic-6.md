## EPIC 6: Project Management

Create, list, switch between, and persist projects with auto-save functionality.

### User Stories

- [ ] US-6.1: Create New Design Project
- [ ] US-6.2: Browse and Switch Between Projects
- [ ] US-6.3: Auto-Save Chat and Files to Database
- [ ] US-6.4: Reopen Saved Project with Full State

### Key Files
- `src/components/HeaderActions.tsx` - Project selector + new project button
- `src/actions/create-project.ts` - Create project server action
- `src/actions/get-projects.ts` - List projects server action
- `src/actions/get-project.ts` - Get single project server action
- `src/app/[projectId]/page.tsx` - Project page route
- `src/app/api/chat/route.ts` - Auto-save on stream completion
