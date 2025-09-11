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
- **ESLint** with Next.js configuration for code quality

### Styling
- Uses Tailwind CSS with modern design tokens
- Geist Sans and Geist Mono fonts loaded via next/font
- Dark mode support built into components

The codebase follows Next.js App Router conventions and uses TypeScript throughout.