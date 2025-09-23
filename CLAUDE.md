# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (http://localhost:3000)
- `npm run build` - Build production application  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture

This is a Next.js 15 application using the App Router architecture with TypeScript support.

### Project Structure
- `src/app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Geist fonts
  - `page.tsx` - Home page component
  - `globals.css` - Global styles
- `public/` - Static assets (SVG icons, images)

### Key Technologies
- **Next.js 15** with App Router
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4** for styling
- **NextAuth.js v5** for authentication with PostgreSQL adapter
- **Neon Postgres** database for user sessions and data
- **ESLint** with Next.js configuration for code quality

### Styling
- Uses Tailwind CSS with modern design tokens
- Open Sans font family for clean, modern typography
- Dark mode support built into components

### Authentication & Database
- **NextAuth.js v5** configured with credentials provider
- **Neon Postgres** database integration via `@auth/pg-adapter`
- Admin credentials: username `admin`, password `maswrestling2024`
- Database tables auto-created by NextAuth adapter on first run
- Environment variables managed in `.env.local` and Vercel dashboard

## Deployment

### Live Site
- **Production URL**: https://mas-canada.vercel.app/
- **Admin Dashboard**: https://mas-canada.vercel.app/admin

### Deployment Setup
- **Platform**: Vercel with automatic deployments
- **Database**: Neon Postgres (connected via environment variables)
- **Auto-deploy**: Every push to `main` branch triggers new deployment
- **Environment Variables**: Configured in Vercel dashboard for production

### Key Files
- `src/auth.ts` - NextAuth configuration with Neon Postgres
- `src/auth.config.ts` - NextAuth routing and callback configuration
- `scripts/init-db.sql` - Database schema reference
- `.env.example` - Environment variables template

The codebase follows Next.js App Router conventions and uses TypeScript throughout.