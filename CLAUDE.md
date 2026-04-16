# CLAUDE.md — buyrobot.land

## Project overview

BuyRobot is a searchable directory of commercially available robots and drones. Users find robots by type, application, specs, price, and certifications. Manufacturers are engaged to claim and enrich their profiles, creating a self-sustaining data flywheel.

**Domains:** buyrobot.land (primary), buybot.land (redirect)

**Business model:** Free directory → premium manufacturer listings → lead generation (Request Quote) → data licensing

**Core thesis:** Source manufacturers from trade show exhibitor lists, scrape their products, structure everything into a unified schema, then engage manufacturers to claim profiles and enrich data. Kuration API handles sourcing, enrichment, and refresh cycles.

---

## Tech stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Frontend | Next.js 14+ (App Router) | SSR for SEO, ISR for data freshness |
| Hosting | Vercel | Zero-config deploys, edge functions, analytics |
| Database | Supabase (Postgres) | Row-level security, real-time, full-text search, PostgREST API |
| Auth | Supabase Auth | Manufacturer login for profile claiming |
| Storage | Supabase Storage | Manufacturer logos, datasheets, product images |
| Search | Supabase full-text search + pg_trgm | Start here. Migrate to Typesense/Algolia only if perf requires it |
| Data pipeline | Kuration API | Sourcing, enrichment, refresh |
| Email | Loops.so | Manufacturer outreach, claim profile campaigns |
| CRM | Attio | Track manufacturer engagement, lead routing |
| Analytics | Vercel Analytics + PostHog | Traffic, search patterns, conversion |
| DNS | Cloudflare | CDN, DDoS protection, fast DNS |

---

## Design system

### Typography

```
Headings:  Fraunces (variable, optical size 9-144)
Body:      Source Sans 3 (weights 300-600)
Data/mono: IBM Plex Mono (weights 400-500)
```

### Colors

Minimal. No brand color. Black, white, gray. Green for verified/NDAA badges, orange for warnings. Let the content be the design.

### Component patterns

- **Listing row:** 48px icon | name + specs | price — always this grid
- **Type card:** centered illustration + type name + count
- **Application tile:** scene illustration + title + description + count
- **Spec grid:** 2x2 grid of label/value pairs on light background
- **Filter bar:** horizontal dropdowns + checkbox, no sidebar

---

## File naming conventions

```
Components:  PascalCase (ProductCard.tsx, FilterBar.tsx)
Pages:       page.tsx (Next.js convention)
Utils:       camelCase (formatPrice.ts, slugify.ts)
Types:       types.ts in each feature folder
Database:    snake_case (all Postgres conventions)
CSS:         Tailwind utility classes, no CSS modules
```

---

## Key decisions

- **No dark mode at launch.** Light theme only.
- **No user accounts for buyers.** Only manufacturers log in.
- **No e-commerce.** Directory + lead gen, not marketplace.
- **ISR over SSR.** `revalidate: 3600` for product/manufacturer pages.
- **Supabase FTS first.** Don't over-engineer search.
- **Mobile-first.** Listing rows must work on 375px.
- **No blog at launch.** Focus on category guides for SEO.
