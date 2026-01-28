# IA Builders Lab — Systems Repository

## Overview
A paid, members-only content repository for "systems, prompt systems, automation blueprints and implementation assets."

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- TailwindCSS
- shadcn/ui
- Supabase (Auth + Postgres + Storage)
- Stripe

## Setup

1. **Clone & Install**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

3. **Supabase Setup**
   - Create a new Supabase project.
   - Run the migration in `supabase/migrations/20251222000000_init.sql` in your Supabase SQL Editor.
   - Enable Email/Password Auth.

4. **Run Locally**
   ```bash
   npm run dev
   ```

## Folder Structure
- `src/app`: App Router pages
- `src/components`: UI components
- `src/lib`: Utilities
- `src/utils/supabase`: Supabase helpers

## Project Status
- Milestone A: Scaffold (Done)
- Milestone B: Auth/RLS (In Progress)
