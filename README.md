# Crucible

A modern starter kit built with Next.js 16, featuring authentication,
database integration, and a polished UI.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Authentication**: Better Auth
- **Database**: PostgreSQL with Drizzle ORM
- **UI**: React 19, shadcn/ui, Tailwind CSS 4
- **Styling**: Tailwind CSS, clsx, tailwind-merge

## Features

- User authentication (sign up, login, profile)
- Database-backed user management
- Responsive UI with shadcn/ui components

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Set up environment variables: Copy `.env.example` to `.env` and configure:
   - `BETTER_AUTH_SECRET` (generate with `openssl rand -base64 32`)
   - `BETTER_AUTH_URL`
   - `NEXT_PUBLIC_BETTER_AUTH_URL`
   - Database connection string

3. Set up the database:

   ```bash
   pnpm db:push
   ```

4. Run the development server:

   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

| Command            | Description              |
| ------------------ | ------------------------ |
| `pnpm dev`         | Start development server |
| `pnpm build`       | Build for production     |
| `pnpm start`       | Start production server  |
| `pnpm lint`        | Run linting              |
| `pnpm format`      | Format code              |
| `pnpm db:push`     | Push schema to database  |
| `pnpm db:generate` | Generate migrations      |
| `pnpm db:migrate`  | Run migrations           |

## Project Structure

```
src/
├── app/           # Next.js App Router
├── components/    # Shared UI components
├── features/      # Feature-based modules
├── hooks/        # Custom React hooks
├── lib/          # Utilities and database
├── stores/       # Global state (Zustand)
├── types/        # TypeScript types
└── utils/        # Helper functions
```

## DDEV

This project uses [DDEV](https://ddev.com/) for local development. DDEV provides
a containerized environment with PostgreSQL, Redis, and other services.

### Setup

1. Install DDEV:

   ```bash
   curl -fsSL https://ddev.com/install.sh | bash
   ```

2. Start the environment:

   ```bash
   ddev start
   ```

3. Run commands using `ddev pnpm`:

   ```bash
   ddev pnpm install
   ddev pnpm dev
   ```

4. Access the app at [https://crucible.ddev.site](https://crucible.ddev.site)

### Available DDEV Commands

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `ddev start`      | Start the development environment      |
| `ddev stop`       | Stop the development environment       |
| `ddev restart`    | Restart the environment                |
| `ddev pnpm <cmd>` | Run pnpm commands inside the container |
| `ddev logs`       | View container logs                    |

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Better Auth Docs](https://www.better-auth.com)
- [Drizzle ORM](https://orm.drizzle.team/)
- [shadcn/ui](https://ui.shadcn.com/)
