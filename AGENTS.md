# Project Notes

## Package Manager

**Always use `ddev pnpm`** instead of `npm` or `pnpm` directly.

Examples:
- `ddev pnpm install` (not `npm install` or `pnpm install`)
- `ddev pnpm build` (not `npm run build`)
- `ddev pnpm dev` (not `npm run dev`)
- `ddev pnpm add <package>` (not `pnpm add <package>`)

## Architecture

This project follows the [bulletproof-react](https://github.com/alan2207/bulletproof-react) architecture:

```
src/
├── app/           # Next.js App Router (pages, layouts, API routes)
├── assets/        # Static assets
├── components/    # Shared UI components (used across features)
├── config/        # Environment variables
├── features/      # Feature-based modules (everything for a feature)
│   └── auth/     # auth feature: config, client, components, hooks, schema
├── hooks/        # Shared custom hooks
├── lib/          # Reusable libraries (db, utils)
├── stores/       # Global state (Zustand)
├── types/        # Shared TypeScript types
└── utils/        # Utility functions
```

**Key principle:** Feature-specific code goes in `src/features/<feature>/`. Only truly shared components go in `src/components/`.

## UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) for UI components. Add new components with:

```
ddev pnpm shadcn add <component>
```

Components are stored in `src/components/ui/`.

## Git

**Always use [Conventional Commits](https://www.conventionalcommits.org/)** for commit messages.

Format: `<type>: <description>`

Examples:
- `feat: add login form`
- `fix: handle timeout error`
- `chore: update zod to v4`

## Database (Drizzle)

Schema is defined in `src/lib/db/schema/` (feature-based). Database client is exported from `src/lib/db/index.ts`.

- `ddev pnpm drizzle-kit push` - Push schema to database
- `ddev pnpm drizzle-kit generate` - Generate migrations
- `ddev pnpm drizzle-kit migrate` - Run migrations

## Authentication (Better Auth)

- Auth config: `src/features/auth/index.ts`
- Auth client: `src/features/auth/client.ts`
- Auth schema: `src/lib/db/schema/auth/`
- API route: `src/app/api/auth/[...all]/route.ts`

Environment variables required:
- `BETTER_AUTH_SECRET` - min 32 chars (generate with `openssl rand -base64 32`)
- `BETTER_AUTH_URL` - e.g., `http://localhost:3000`
- `NEXT_PUBLIC_BETTER_AUTH_URL` - client-side URL

## Documentation

- [Next.js](https://nextjs.org/docs) - React framework
- [Better Auth](https://www.better-auth.com) - Authentication
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Drizzle ORM](https://orm.drizzle.team/) - Database ORM
- [Vercel React Best Practices](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices) - Performance optimization
