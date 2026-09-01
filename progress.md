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

## Since rev 1 (this session)

- [x] WhatsApp (`wa.me/8801938820835`) and Facebook links added to the footer (icon buttons) and the Contact page (WhatsApp shown alongside email)
- [x] Privacy Policy (`/privacy`) and Terms of Service (`/terms`) pages written — specific to what this site actually does (marketing site + contact form, Vercel hosting, Google Fonts, no accounts/payments), not generic boilerplate. **Not lawyer-reviewed — have someone check these before you rely on them, especially once real client contracts are involved.**
- [x] Footer gained a "Legal" column linking both pages
- [x] Vercel Analytics wired into the root layout (`@vercel/analytics`) — cookie-less, no consent banner needed. **Only actually collects data once deployed on Vercel**; it's inert on localhost and on other hosts.
- [x] Real logo received from you — waiting on the source file to process (see below)

## Not done yet — what's left

### Blocking for launch
1. **Domain not live.** Neither `zentstech.com` nor `zents.tech` resolves to anything right now (checked 2026-09-01). Confirm you actually own `zentstech.com`, then point DNS at wherever this gets deployed.
2. **No real hosting/deployment.** Site only runs locally (`npm run dev`). Needs a deploy target — Vercel is the natural fit for Next.js and was the recommended stack (and is what Analytics above needs to actually turn on).
3. **Contact form doesn't send real email.** `src/app/api/contact/route.ts` validates and logs to the server console only — there's a `TODO` in the file. Needs a real delivery mechanism (Resend, SES, or forwarding inbox) wired in with an API key before this goes live, or inquiries will silently go nowhere.
4. **`hello@zentstech.com` isn't a real mailbox yet** (assumed placeholder throughout the site — footer, contact page, success message). Needs an actual inbox (Google Workspace / Zoho Mail / etc.) once the domain is live.
5. **Logo/favicon still pending.** You shared the Zents Tech logo (dark blue "ZENTS" wordmark with the arrow-through-N mark, "Tech" underneath) and asked for the background removed before it's used as the favicon/watermark. I don't have the actual image file yet — a pasted screenshot in chat isn't saved to disk where I can process it. **Please save it as a file (e.g. drop it in `zents-tech/public/logo-source.png`) and tell me the path**, and I'll remove the background and generate the favicon + header/OG assets from it.

### Should do before announcing the site publicly
6. **OG share image** — no social-share preview image exists yet; can be generated from the real logo once received.
7. **No `robots.txt` / `sitemap.xml`.** Not set up yet — easy to add via `src/app/sitemap.ts` and `src/app/robots.ts`.
8. **No spam protection on the contact form** — no honeypot, rate limiting, or CAPTCHA. Low risk at launch traffic but worth a simple honeypot field early.
9. **Custom 404 page** — currently Next.js's default `not-found`.

### Deferred on purpose (per the Phase 1 strategy, not a gap)
- **No case studies page** — intentional until there are real, named clients with real numbers to show. Do not fill this with placeholder/fake content.
- **No blog/Insights section** — Phase 2 per the site strategy.
- **No separate "Software Engineering" nav item or Industries page** — Phase 2, once case studies exist per vertical.
- **No founder bio/photo on About** — kept deliberately generic; add only with real content, not filler.

## Suggested next order of work
1. Send over the logo source file so it can be processed into the favicon/OG assets.
2. Confirm domain ownership → deploy to Vercel → point DNS (this also switches Analytics on).
3. Wire real email delivery on the contact route + set up the `hello@zentstech.com` mailbox.
4. Add `sitemap.ts`/`robots.ts`, a simple contact-form honeypot, and a custom 404 page.
5. Everything else (case studies, blog, Software Engineering page) waits for real client work per the phased plan.
