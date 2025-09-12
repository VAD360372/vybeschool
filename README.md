# VybeSchool – Main Site

A modern marketing and content site for VybeSchool built with Next.js App Router, React 19, and Tailwind CSS. This document gives new developers everything needed to set up, understand, and contribute to the codebase.

## Tech Stack
- Framework: Next.js 15 (App Router)
- Runtime: Node.js 18+
- UI Library: React 19
- Styling: Tailwind CSS v4 + custom CSS
- Component Primitives: Radix UI
- Icons: lucide-react
- Utilities: clsx, class-variance-authority
- State: Zustand, use-sync-external-store
- Forms/Validation: react-hook-form, @hookform/resolvers, zod
- Charts/Visuals: recharts, embla-carousel-react
- Themes: next-themes

Key packages (see package.json): next 15.x, react 19, tailwindcss 4.x, @radix-ui/*, lucide-react, cmdk, sonner, geist, vaul.

## Repository Layout
Vybeschool-MAIN-SITE/
- app/
  - layout.tsx — Root layout (providers, fonts, wrappers)
  - globals.css — App-level CSS
  - page.tsx — Home page
  - ai-engineer/page.tsx — AI Engineering Bootcamp landing (video, countdown, pricing, modules, CTAs)
  - ai-support/page.tsx — AI Support landing
  - applied-ai/
    - ai-tools/page.tsx — Applied AI tools overview
    - course/[courseId]/page.tsx — Dynamic course details
    - page.tsx — Applied AI main page
  - live-classes/page.tsx — Live classes
  - support/page.tsx — Support page
  - team/page.tsx — Our Team (gallery, members, products tiles)
  - components/ — App-level components: CommandPalette.tsx, Dock.tsx, Eyes.tsx, Window.tsx
- components/ — Shared components/design system
  - ui/ — Radix-based UI primitives (buttons, inputs, etc.)
  - AIBootcampPopup.tsx, CountdownTimer.tsx, GlobalNavigation.tsx, theme-provider.tsx
- hooks/ — use-mobile.ts, use-toast.ts
- lib/ — ui-store.ts (Zustand), utils.ts (helpers)
- public/ — Static assets (images/videos)
- styles/globals.css — Global styles (legacy/overrides)
- next.config.mjs, postcss.config.mjs, tsconfig.json

## Getting Started
1) Install Node.js 18+.
2) Install dependencies (use legacy peer resolution if needed):
   npm install --legacy-peer-deps
3) Start dev server:
   npm run dev
4) Open http://localhost:3000

Build/start production:
- npm run build
- npm start

Lint:
- npm run lint

## Scripts
- dev — Next dev server
- build — Production build
- start — Start production server
- lint — Next lint

## Routes Overview (App Router)
- /  app/page.tsx (Home)
- /ai-engineer  app/ai-engineer/page.tsx (Bootcamp)
- /ai-support  app/ai-support/page.tsx
- /applied-ai  app/applied-ai/page.tsx
  - /applied-ai/ai-tools  app/applied-ai/ai-tools/page.tsx
  - /applied-ai/course/[courseId]  app/applied-ai/course/[courseId]/page.tsx
- /live-classes  app/live-classes/page.tsx
- /support  app/support/page.tsx
- /team  app/team/page.tsx

## Notable Files
- app/layout.tsx — Root, providers, font/theme setup
- app/ai-engineer/page.tsx — Video hero, CountdownTimer, modules accordion (useState<Set<number>>), pricing, dual CTAs (WhatsApp JOIN, Google Forms REGISTER)
- app/team/page.tsx —
  - Gallery: hackathon highlights (square images, tight borders)
  - Members: cards with headshots and social links (LinkedIn/Instagram)
  - Products: square product tiles (sco.jpg, lumiai.jpg) with Visit buttons
- components/GlobalNavigation.tsx — Top navigation
- components/CountdownTimer.tsx — Reusable countdown widget
- components/theme-provider.tsx — next-themes wrapper
- components/ui/* — Reusable UI building blocks
- lib/ui-store.ts — Zustand store for light UI state
- lib/utils.ts — Shared utilities

## Styling Conventions
- Tailwind-first styling. Prefer utilities over custom CSS.
- Card style: border-4 border-black, heavy drop shadows, rounded-lg.
- Images in grids: object-cover with square/fixed-height wrappers to avoid layout shift.
- Keep className order consistent (layout  spacing  borders  bg  text  effects).

## State Management
- Local component state via React hooks.
- Shared lightweight UI state in lib/ui-store.ts (Zustand).

## Assets
- Place images/videos under public/ and reference as /file.ext
- Large videos (e.g., /Bootcamp Video.mp4) are used on landing pages.

## Accessibility & SEO
- Provide meaningful alt text.
- External links use target="_blank" and rel="noopener noreferrer".
- Interactive elements include aria-label/title where appropriate.

## Known Issues
- npm install peer dependency conflict (React 19 vs vaul@0.9.9). Workaround:
  npm install --legacy-peer-deps
- PowerShell uses ';' for chaining commands instead of '&&'.

## Development Tips
- Reuse components from components/ui/ and Radix primitives.
- Keep components small, readable; avoid deep nesting.
- Use TypeScript annotations for component props and exported APIs.
- Prefer Next Image for future optimization if adding many images.

## Adding a New Page
- Create app/your-page/page.tsx exporting a default component.
- Add assets to public/ and reference via /your-asset.png.
- Use components/ui/ elements where possible.

## Environment Variables
- None required currently. Add .env.local for any future secrets and document here.

## Deployment
- Recommended: Vercel.
- Ensure npm run build succeeds. Public assets are automatically served via CDN.

## Ownership
- Marketing pages: app/*
- Shared UI: components/ui/*
- Imagery and videos: public/*

Welcome to VybeSchool! Ship confidently, keep pages fast, and preserve the bold, accessible visual style.
