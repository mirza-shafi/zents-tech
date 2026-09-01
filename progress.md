# Zents Tech — Website Progress

Last updated: 2026-09-01 (rev 4)

## Stack
Next.js (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui (Base UI primitives) + lucide-react icons.

## Done

- [x] Next.js project scaffolded (`create-next-app`, TS, Tailwind, ESLint, App Router, `src/` dir)
- [x] shadcn/ui initialized; components added: button, card, badge, separator, accordion, navigation-menu, sheet, input, textarea, label
- [x] Brand visual system: fixed dark graphite theme, teal accent, Archivo (display) + IBM Plex Sans (body) + IBM Plex Mono (labels/data) — `src/app/globals.css`, `src/app/layout.tsx`
- [x] Site data / content model — `src/lib/site-data.ts` (nav, 3 service categories, 8 productized offers, 6-step client lifecycle)
- [x] Shared components: `Logo`, `SiteHeader` (desktop nav + mobile sheet menu), `SiteFooter`
- [x] Pages built:
  - [x] Home (`/`) — hero, problem strip, founding note (honest, no fake trust signals), services overview, process overview, why-us, final CTA
  - [x] Systems (`/systems`) — full service architecture (AI Systems / Business Automation / Software Engineering / Diagnostics) + all 8 productized offers with BDT + USD pricing
  - [x] Process (`/process`) — Audit → Quick Win → Automation/AI System → Software → Monthly Support → Product, expanded
  - [x] About (`/about`) — origin story, current-stage honesty, principles
  - [x] Contact (`/contact`) — form + direct contact card
- [x] Contact form → `/api/contact` route: validates input, logs submission server-side, returns success/error to the client. **Tested end-to-end, works.**
- [x] Metadata: per-page `<title>`/`<meta description>`, Open Graph/Twitter tags, title template (`%s — Zents Tech`)
- [x] `npm run build`, `npx tsc --noEmit`, `npm run lint` all pass clean
- [x] Verified in-browser: all 5 pages render correctly, mobile nav sheet opens and lists all links, contact form full round-trip (fill → submit → success state → server log)
- [x] Local dev server registered at `.claude/launch.json` as `zents-tech-dev` (port 3010)

## Since rev 1 (this session)

- [x] WhatsApp (`wa.me/8801938820835`) and Facebook links added to the footer (icon buttons) and the Contact page (WhatsApp shown alongside email)
- [x] Privacy Policy (`/privacy`) and Terms of Service (`/terms`) pages written — specific to what this site actually does (marketing site + contact form, Vercel hosting, Google Fonts, no accounts/payments), not generic boilerplate. **Not lawyer-reviewed — have someone check these before you rely on them, especially once real client contracts are involved.**
- [x] Footer gained a "Legal" column linking both pages
- [x] Vercel Analytics wired into the root layout (`@vercel/analytics`) — cookie-less, no consent banner needed. **Only actually collects data once deployed on Vercel**; it's inert on localhost and on other hosts.

## Since rev 2 (this session)

- [x] Real logo processed: background removed from the source PNG (`public/logo.png`, since deleted — the studio-mockup gray background and drop shadow are gone, decontaminated edges, no white halo). Method documented in `scripts/process_logo.py` in case the source logo is ever replaced and this needs re-running.
- [x] Favicon/icon set generated from the logo's arrow-through-N mark (the full wordmark is illegible at 16–32px, so just the mark is used): `src/app/favicon.ico`, `src/app/icon.png`, `src/app/apple-icon.png` — all auto-detected by Next.js's file-based convention, confirmed present in the page's `<head>`.
- [x] Open Graph / Twitter share image generated from the full wordmark on the brand dark background: `src/app/opengraph-image.png` (1200×630) — also auto-picked-up by Next.js, confirmed in `og:image`/`twitter:image` meta tags.
- [x] Header `Logo` component now renders the real icon mark (`public/icon-192.png`) next to the "Zents Tech" text, replacing the placeholder hand-drawn SVG mark used earlier.
- [x] Removed the unused default Next.js starter assets (`next.svg`, `vercel.svg`, etc.) from `public/`.
- [x] `npm run build` / `tsc --noEmit` / `npm run lint` all still pass clean; verified in-browser that the new header logo and all icon `<link>`/`<meta>` tags render correctly.

## Since rev 3 (this session)

- [x] **Full theme flip: dark → light.** Site was originally built as a fixed dark-graphite theme; switched to a fixed light theme per your request. New palette in `src/app/globals.css`:
  - Page background: `#F6F8FB`
  - Cards / elevated surfaces: pure white `#FFFFFF`, with a soft shadow added to the shared `Card` component so they visibly lift off the page background
  - Text ink: `#12161C`; muted text: `#5B6472`; borders: `#E2E7EF`
  - Accent kept in the same teal family as before (for continuity with buttons/links already in copy) but darkened to `#0F766E` for proper contrast on a light background
- [x] Removed the hardcoded `dark` class from `<html>` in `src/app/layout.tsx` — the site has no light/dark toggle, so this is now just a single, deliberate light theme (matches how it was already built for dark, just flipped)
- [x] Verified in-browser across Home, Systems, and Contact: hero, cards, pricing grid, form inputs, and footer all read cleanly on the new palette; no leftover hardcoded dark-mode colors found anywhere in the codebase (confirmed by search — every component already used the token system, so this was a CSS-only change)

## Not done yet — what's left

### Blocking for launch
1. **Domain not live.** Neither `zentstech.com` nor `zents.tech` resolves to anything right now (checked 2026-09-01). Confirm you actually own `zentstech.com`, then point DNS at wherever this gets deployed.
2. **No real hosting/deployment.** Site only runs locally (`npm run dev`). Needs a deploy target — Vercel is the natural fit for Next.js and was the recommended stack (and is what Analytics above needs to actually turn on).
3. **Contact form doesn't send real email.** `src/app/api/contact/route.ts` validates and logs to the server console only — there's a `TODO` in the file. Needs a real delivery mechanism (Resend, SES, or forwarding inbox) wired in with an API key before this goes live, or inquiries will silently go nowhere.
4. **`hello@zentstech.com` isn't a real mailbox yet** (assumed placeholder throughout the site — footer, contact page, success message). Needs an actual inbox (Google Workspace / Zoho Mail / etc.) once the domain is live.

### Should do before announcing the site publicly
5. **No `robots.txt` / `sitemap.xml`.** Not set up yet — easy to add via `src/app/sitemap.ts` and `src/app/robots.ts`.
6. **No spam protection on the contact form** — no honeypot, rate limiting, or CAPTCHA. Low risk at launch traffic but worth a simple honeypot field early.
7. **Custom 404 page** — currently Next.js's default `not-found`.

### Deferred on purpose (per the Phase 1 strategy, not a gap)
- **No case studies page** — intentional until there are real, named clients with real numbers to show. Do not fill this with placeholder/fake content.
- **No blog/Insights section** — Phase 2 per the site strategy.
- **No separate "Software Engineering" nav item or Industries page** — Phase 2, once case studies exist per vertical.
- **No founder bio/photo on About** — kept deliberately generic; add only with real content, not filler.

## Suggested next order of work
1. Confirm domain ownership → deploy to Vercel → point DNS (this also switches Analytics on).
2. Wire real email delivery on the contact route + set up the `hello@zentstech.com` mailbox.
3. Add `sitemap.ts`/`robots.ts`, a simple contact-form honeypot, and a custom 404 page.
4. Everything else (case studies, blog, Software Engineering page) waits for real client work per the phased plan.
