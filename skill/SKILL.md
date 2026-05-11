---
name: vibekit
description: Build Next.js apps using the VibeKit framework. Enforces master_prompt.md coding standards, applies design-style-guide.md tokens, uses JB components from jb-components.md, and builds phase by phase from project-phases.md. Use when starting a new VibeKit project or resuming a build.
---

# VibeKit — Build with the Framework

Build production-grade Next.js applications following the VibeKit framework standards.

## When to Use

- Starting a new project that has `master_prompt.md`, `design-style-guide.md`, `jb-components.md`, `project-description.md`, and `project-phases.md` in the root
- Resuming a VibeKit build mid-phase
- When the user says "use vibekit", "follow the framework", or "start building"

## Before You Write Any Code

**Read these files in order. Do NOT skip any.**

1. **`master_prompt.md`** — Your coding standards, tech stack rules, and Prisma v7 patterns. Follow these EXACTLY. Non-negotiable.
2. **`design-style-guide.md`** — The customized visual design system for THIS project. Every component you build must follow these tokens (colors, typography, spacing, radius, shadows, component specs).
3. **`jb-components.md`** — Reference for JB components. Before building auth, file uploads, data tables, checkout, blogs, or API docs from scratch — check this file for an existing component and install it first.
4. **`project-description.md`** — What the app is, who it's for, features, data model, pages, integrations. Every decision must align with this.
5. **`project-phases.md`** — The build plan. Work through phases in order.

## Critical Rules

### Tech Stack (enforced — no substitutions)
- **Framework:** Next.js 16 (App Router), TypeScript 5.9
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Database:** Neon PostgreSQL + Prisma v7 (NOT v6 — follow master_prompt.md patterns exactly)
- **Auth:** JB Better Auth UI (install the component, don't write from scratch)
- **Data Fetching:** React Query (`@tanstack/react-query`) + Fetch API. NEVER `useEffect` for data.
- **Forms:** React Hook Form + Zod. Always.
- **API:** API Routes (Route Handlers). All server-side logic goes through API routes.
- **PDF:** `@react-pdf/renderer`. NEVER jsPDF.
- **Excel:** `xlsx`. NEVER alternatives.
- **File uploads:** Check `project-description.md` — R2/S3 (use JB File Storage UI) or UploadThing.
- **Email:** Resend + React Email
- **Components:** Check `jb-components.md` first

### Design System (NON-NEGOTIABLE — vibe coders are not designers, you are)
- Follow `design-style-guide.md` exactly — it was customized for this project
- Every color must come from the palette defined in the style guide
- Every spacing must match the 8pt grid (multiples of 4)
- Every component (buttons, inputs, cards, tables, modals, badges) must match the spec in master_prompt.md → DESIGN SYSTEM
- Typography: use the fonts and scale defined in master_prompt. Display headlines weight 600–700, tight tracking, NEVER 800/900 weights. ALWAYS tabular-nums on prices, stats, dates
- Radius: never mix radius values in the same container — smaller inside larger
- Shadows: borders do the work, shadows are subtle. NEVER `shadow-2xl` decoratively. NO shadow on buttons (except the controlled accent glow on the marketing primary CTA)
- ONE accent color per project. NEVER multi-color gradient buttons. NEVER multi-color gradient backgrounds. The first AI-slop signal is a purple→pink→orange button.
- Section vertical padding `py-20 sm:py-32` between marketing sections — generous whitespace is a feature

### Selected / Active States are LOUD
The single most-broken design pattern in AI-built UIs. Fix it:
- Unselected: `border border-border bg-elevated`
- Selected: `border-2 border-accent bg-accent/5` (5% accent-tinted bg) + filled radio/check icon
- The contrast must be obvious at a glance from 2 metres away
- Applies to: pricing cards, payment-method pickers, plan choosers, multi-step form options, filter chips, tab buttons

### Image-First Rule (80/20 — IMAGES outnumber ICONS 4:1)
The biggest tell of an AI-built UI is "lonely Lucide icons everywhere." Audit every page — if a card's only visual is a 24px Lucide icon, that's a violation.

USE IMAGES (illustrations, custom SVG art, photos, product screenshots) for:
- Stat cards, feature cards, empty states
- Hero / above-the-fold blocks
- Modal option pickers (each option gets a mini-illustration, like the VibeKit modal reference)
- Onboarding cards, pricing tier headers
- Marketing section openers
- Testimonial avatars (real photos when possible)
- 404 / error / loading pages

LUCIDE ICONS are only for inline UI affordances (close X, chevrons, search prefix, sort indicator, sidebar nav items, status pip, password-toggle Eye, in-button icon).

WHERE TO GET illustrations:
1. Custom inline SVG components in `src/components/illustrations/*.tsx` (preferred — themeable via currentColor, no network requests)
2. Free libraries: undraw.co, manypixels.co, blush.design, Storyset, lottiefiles.com (Lottie animations)
3. Real Unsplash photos for testimonial avatars / hero backgrounds (always use `next/image` + alt text)
4. Product screenshots from the actual app (best social proof)

The canonical 3D-looking SVG pattern (gradient + soft highlight + drop shadow) is in master_prompt.md → IMAGE-FIRST RULE → custom 3D SVG section. Build once, reuse with different colors per card.

### Motion Rules (GSAP for scroll/entrance, Framer Motion for state)
- **GSAP + ScrollTrigger** for: hero entrance, scroll-triggered section reveals, list staggers, multi-step entrance timelines, parallax. Use `useGSAP({ scope: ref })` from `@gsap/react`.
- **Framer Motion** for: modal open/close, tab switching, accordion expand, toast slide, drag, layout animations (`<motion.div layout>`).
- Timing: 150ms hover, 200ms modal enter, 600–800ms section reveal, 80–120ms list stagger.
- Easing: `power3.out` (GSAP entrances), `[0.16, 1, 0.3, 1]` (Framer Motion).
- ALWAYS respect `prefers-reduced-motion` — gate GSAP timelines with `window.matchMedia` check, use Framer's `useReducedMotion()` hook.
- Every interactive element has hover state + focus-visible ring + 150ms transition. A button with no hover and no focus ring is a sign the agent gave up.

### CRITICAL motion bug to avoid
NEVER apply `gsap.from()` with `opacity: 0` to interactive elements (buttons, links, form inputs). If ScrollTrigger doesn't fire (mid-page reload, hash navigation), the element stays at opacity 0 forever. For CTAs and important UI: render statically OR use `gsap.fromTo()` with explicit values, OR animate parent containers.

### JB Components — Check First, Build Second
Before building from scratch, check `jb-components.md`:

| If building... | Install this first |
|---|---|
| Auth (sign-in, sign-up, OAuth, password reset) | JB Better Auth UI |
| File upload (S3/R2) | JB File Storage UI |
| Stripe checkout | Zustand Cart → Stripe UI |
| Data table with search/sort/pagination | JB Data Table |
| Searchable dropdown | Searchable Select |
| Landing pages / marketing | Website UI |
| Blog with MDX | MDX Blog |
| API documentation | Scalar API Docs |
| Mobile Money payments | DGateway Shop |

Install with the exact `pnpm dlx shadcn@latest add ...` command from `jb-components.md`. Read the installed files before writing new code on top of them.

### Build Process
1. Work through **ONE phase at a time** from `project-phases.md`
2. Complete ALL tasks in a phase before moving to the next
3. After completing each phase, **stop and confirm** with the user before proceeding
4. Check off completed tasks in `project-phases.md` as you go

### API Routes — Auth/Authorization Are Mandatory
Every route handler must:
- Start with `requireSession()` (or `requireRole()` for admin-only routes) from `src/lib/auth-guard.ts`
- Validate POST/PATCH/PUT bodies with Zod before touching the database
- Scope queries to `session.user.id` unless the route is admin-only
- Never log session tokens, full request bodies with secrets, or stack traces in production responses

See master_prompt.md → API ROUTE template for the canonical pattern.

### Form Rules — non-negotiable, agents forget these constantly

For EVERY form, EVERY input, EVERY list page in the project:

1. **React Hook Form + Zod for ALL forms.** No bare `<input> + useState` pattern. Every field wrapped in `<FormField>` with `<FormLabel>` and `<FormMessage>`. The same Zod schema validates client-side AND in the API route.

2. **Currency / amount inputs auto-format with commas while typing.** Use the canonical `<CurrencyInput>` component (defined in master_prompt.md → FORM RULES → Rule 2). Form state stores the raw integer (`3000000`), display string is derived (`3,000,000`). Never `<Input type="number" />` for currency.

3. **Searchable select for any dropdown with >5 options.** Use JB Searchable Select (`pnpm dlx shadcn@latest add https://jb.desishub.com/r/searchable-select.json`) or build a Combobox from shadcn Command + Popover + Button. Never plain `<select>` or shadcn `<Select>` for long lists.

4. **Date inputs use shadcn Calendar inside Popover.** Never `<input type="date">`. Use `format()` from date-fns for display. For ranges use `mode="range"`.

5. **Server-side pagination + search + filters via URL query params.** API routes return `{ data, total, page, limit, totalPages }`. Client uses React Query with the URL as the source of truth (debounce search input 300ms). Never fetch the full list and `.filter()` client-side.

Before declaring any form or list page "done", run the self-check from master_prompt.md → FORM RULES → SUMMARY.

### Stripe Webhooks — Raw Body Required
Use `await req.text()` for the body, never `req.json()`. Pass the raw string to `stripe.webhooks.constructEvent`. Webhook handlers must be idempotent — store processed event IDs.

### Dependency Blocklist
Never install: moment, axios, next-auth, classnames, jspdf, redux, material-ui, chakra-ui, styled-components, react-toastify. See master_prompt.md for the full list and approved alternatives.

### Pre-Deploy Review
The final task in Phase 6 is to run the pre-deploy review. The prompt lives in the VibeKit repo at `pre-deploy-review.md`. Tell the user to paste it into Claude Code as the LAST step before deploying. Address every Critical finding before going live.

### Environment Files (Phase 1 — non-negotiable)
Always create BOTH `.env.example` (committed) and `.env.local` (gitignored) with every env var the project needs. Source of truth:
- Read `project-description.md` → **Integrations** section
- For each JB component listed in `project-phases.md`, look up its env vars in `jb-components.md`
- Include: DATABASE_URL, BETTER_AUTH_SECRET, BETTER_AUTH_URL, plus OAuth/Resend/Stripe/R2/S3/UploadThing/DGateway keys ONLY if that integration is in the project
- Each var gets a one-line comment in `.env.example` describing what it is and where to get it
- Add `.env.local` to `.gitignore` if missing

### Dark Mode (check project-description.md)
Check `project-description.md` → **Integrations** → **Dark mode**.
- **If "Yes":** Include ThemeProvider, `next-themes`, CSS variables for light + dark, and a dark mode toggle in the sidebar user block.
- **If "No":** SKIP `next-themes` entirely. Do not install it. Do not create a ThemeProvider. Do not generate a toggle. Hardcode the light palette only. Do not use `.dark` classes anywhere.

### Editing vs Replacing Files (JB component integration)
When a JB component install creates files that overlap with files already in the project (e.g. `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/globals.css`):

**DO:**
- Read the existing file FIRST
- Read the newly-installed component file
- MERGE: keep existing wiring (providers, fonts, custom imports) and integrate the component's sections inline
- Adapt the component's copy and branding to match `project-description.md`
- Example: if Website UI installs a generic home page and the project already has one, EDIT the existing `page.tsx` to pull in Website UI's sections — don't overwrite

**DO NOT:**
- Delete a working `page.tsx`/`layout.tsx` and start over
- Scaffold parallel routes (both `/home` and `/`)
- Overwrite `globals.css` wholesale — append the component's styles
- Lose project-specific branding or config when integrating

If a merge is ambiguous, ask the user before proceeding.

### Code Quality
- Every API route must support server-side pagination
- Every form must use React Hook Form + Zod validation
- Every page must have loading skeletons (not spinners) and empty states
- Never truncate code — write complete files
- Use `@/` path alias for all imports
- Prisma v7: generator = `"prisma-client"`, output to custom path, use `@prisma/adapter-pg`
- Dark mode: use CSS variables + `next-themes`, never hardcode colors

## If Files Are Missing

If any of `master_prompt.md`, `design-style-guide.md`, `jb-components.md`, `project-description.md`, or `project-phases.md` are missing, tell the user:

> "This project is missing VibeKit framework files. To set up a new project:
> 1. Go to [github.com/MUKE-coder/vibekit](https://github.com/MUKE-coder/vibekit)
> 2. Copy `CLAUDE_PROMPT.md` and paste it into Claude (claude.ai) with your app idea
> 3. Claude will generate `project-description.md`, `project-phases.md`, `design-style-guide.md`, and `prompt.md`
> 4. Also copy `master_prompt.md` and `jb-components.md` from the vibekit repo into your project root
> 5. Then run `/vibekit` again"
