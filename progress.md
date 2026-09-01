# Zents Tech — Website Progress

Last updated: 2026-09-01 (rev 2)

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

## Not done yet — what's left

### Blocking for launch
1. **Domain not live.** Neither `zentstech.com` nor `zents.tech` resolves to anything right now (checked 2026-09-01). Confirm you actually own `zentstech.com`, then point DNS at wherever this gets deployed.
2. **No real hosting/deployment.** Site only runs locally (`npm run dev`). Needs a deploy target — Vercel is the natural fit for Next.js and was the recommended stack.
3. **Contact form doesn't send real email.** `src/app/api/contact/route.ts` validates and logs to the server console only — there's a `TODO` in the file. Needs a real delivery mechanism (Resend, SES, or forwarding inbox) wired in with an API key before this goes live, or inquiries will silently go nowhere.
4. **`hello@zentstech.com` isn't a real mailbox yet** (assumed placeholder throughout the site — footer, contact page, success message). Needs an actual inbox (Google Workspace / Zoho Mail / etc.) once the domain is live.

### Should do before announcing the site publicly
5. **Favicon / OG image are still Next.js defaults.** `src/app/favicon.ico` and the unused `public/*.svg` files (next.svg, vercel.svg, etc.) need replacing with real Zents Tech brand assets. No social-share (OG) image exists yet.
6. **No `robots.txt` / `sitemap.xml`.** Not set up yet — easy to add via `src/app/sitemap.ts` and `src/app/robots.ts`.
7. **No Privacy Policy / Terms page**, even though the contact form collects name/email/message. Worth having before real traffic, especially for international (GDPR-aware) visitors.
8. **No spam protection on the contact form** — no honeypot, rate limiting, or CAPTCHA. Low risk at launch traffic but worth a simple honeypot field early.
9. **Custom 404 page** — currently Next.js's default `not-found`.
10. **Social links** — footer has no LinkedIn/Facebook/WhatsApp links (WhatsApp in particular matters for the BD market per the brand strategy).
11. **Analytics** — nothing wired up (Plausible/GA4/Vercel Analytics), so there's no way to see traffic yet.

### Deferred on purpose (per the Phase 1 strategy, not a gap)
- **No case studies page** — intentional until there are real, named clients with real numbers to show. Do not fill this with placeholder/fake content.
- **No blog/Insights section** — Phase 2 per the site strategy.
- **No separate "Software Engineering" nav item or Industries page** — Phase 2, once case studies exist per vertical.
- **No founder bio/photo on About** — kept deliberately generic; add only with real content, not filler.

## Suggested next order of work
1. Confirm domain ownership → deploy to Vercel → point DNS.
2. Wire real email delivery on the contact route + set up the mailbox.
3. Replace favicon/OG image, add `sitemap.ts`/`robots.ts`, add a Privacy Policy page.
4. Add WhatsApp/social links to the footer.
5. Add basic analytics.
6. Everything else (case studies, blog, Software Engineering page) waits for real client work per the phased plan.
