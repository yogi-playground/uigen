# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

UIGen is an AI-powered React component generator with live preview capabilities. It's a Next.js 15 application that uses Google Gemini AI to generate React components based on user descriptions, displays them in real-time preview, and provides a code editor interface.

## Common Development Commands

```bash
# Development
npm run dev              # Start dev server with Turbopack
npm run dev:daemon       # Start dev server in background, logs to logs.txt

# Building & Production
npm run build           # Build for production
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run test            # Run Vitest tests

# Database
npm run setup           # Full setup: install deps + generate Prisma + migrate
npm run db:reset        # Reset database with force flag
npx prisma generate     # Generate Prisma client
npx prisma migrate dev  # Run database migrations
```

## Architecture Overview

### Core Structure
- **Next.js App Router**: Uses `/src/app` directory structure with App Router
- **Authentication**: Custom JWT-based auth using `jose` library in `/src/lib/auth.ts`
- **Database**: SQLite with Prisma ORM, schema in `/prisma/schema.prisma`
- **AI Integration**: Google Gemini via AI SDK, with fallback mock provider when no API key

### Key Directories
- `/src/app/` - Next.js App Router pages and API routes
- `/src/components/` - React components organized by feature
  - `/auth/` - Authentication components (SignIn, SignUp, AuthDialog)
  - `/chat/` - Chat interface components (MessageList, MessageInput, ChatInterface)
  - `/editor/` - Code editor components (CodeEditor, FileTree)
  - `/preview/` - Preview frame component
  - `/ui/` - Reusable UI components using Radix UI + Tailwind
- `/src/actions/` - Server actions for database operations
- `/src/lib/` - Utility libraries and configurations
- `/src/hooks/` - Custom React hooks

### AI Provider Architecture
The app uses a dual AI provider system in `/src/lib/provider.ts`:
- **Real Provider**: Uses Google Gemini API when `GOOGLE_API_KEY` is set
- **Mock Provider**: Generates static demo components when no API key is provided
- The mock provider simulates tool calling behavior to create realistic demo experiences

### Virtual File System
- Components are stored in a virtual file system (not written to disk)
- File operations are simulated through tool calling interface
- Code is persisted in the database as JSON in the `Project.data` field

### Database Schema
- **Users**: Authentication with email/password
- **Projects**: Store component data, chat messages, and virtual file system state
- Anonymous users can use the app without persistence

## Development Notes

### Environment Setup
- Optional `GOOGLE_API_KEY` in `.env` file
- App functions without API key using mock responses
- Database auto-initializes with SQLite

### Testing
- Uses Vitest with jsdom environment
- Tests located in `__tests__` directories alongside components
- React Testing Library for component tests

### Styling
- Tailwind CSS v4 with custom configuration
- Radix UI components for accessible primitives
- Custom UI components in `/src/components/ui/`

### Authentication Flow
- JWT tokens stored in HTTP-only cookies
- Middleware at `/src/middleware.ts` handles auth state
- Anonymous usage supported without registration

### Node.js Compatibility
- Uses `node-compat.cjs` file for Node.js compatibility with certain dependencies
- Required for Babel standalone and other Node-specific packages

## Development Guidelines

### Code Style
- Use comments sparingly, only comment complex code

### Database Reference
- The database schema is defined in `/prisma/schema.prisma`
- Reference it anytime you need to understand the structure of data stored in the database