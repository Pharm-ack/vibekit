---
name: New component
about: Add a new component to the VibeKit JB Component Registry
title: "Add: <Component Name>"
labels: component, contribution
---

## Component info

- **Name:**
- **Slug:** (lowercase, hyphens — becomes `/components/<slug>`)
- **Category:** `auth | marketing | data | commerce | files | content | api | forms` (or proposing new)
- **Doc page (`blogUrl`):**
- **Install command tested on:** (Node version, Next.js version, agent)

## What does it do?

<!-- 2–4 sentences. What problem does it solve? Who is it for? -->

## What's in the schema entry?

<!-- Paste your full entry from web/src/lib/components-data.ts -->

```ts
{
  slug: "...",
  name: "...",
  tagline: "...",
  category: "...",
  categoryLabel: "...",
  install: "...",
  blogUrl: "...",
  prerequisites: [...],
  envVars: [...],
  features: [...],
  whenToUse: "...",
  whenNotToUse: "...",
  filesAdded: [...],
}
```

## Quality checklist

- [ ] Component is production-ready and documented
- [ ] Install command works end-to-end on a fresh Next.js 16 project
- [ ] Schema entry includes every required field
- [ ] `filesAdded` lists every route, API endpoint, component, and schema change
- [ ] Env vars enumerated with where to obtain them (or `envVars` omitted if none)
- [ ] Category fits an existing one OR new category proposed below
- [ ] Component does not duplicate an existing JB component (checked `/components`)
- [ ] Doc page (`blogUrl`) is publicly accessible

## How to test this PR

1. Check out this branch
2. `cd web && pnpm install && pnpm dev`
3. Navigate to `/components/<slug>` — verify the detail page renders correctly
4. Run the install command in a fresh Next.js 16 project — verify it works

## Anything reviewers should know?

<!-- Edge cases, known limitations, related work, anything that affects review -->
