# Zents Tech — Website Progress

Last updated: 2026-09-01 (rev 23)

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

## Since rev 4 (this session)

- [x] **Career page added** (`/career`), added to primary nav between Process and About. Studied the structure of Therap BD, Field Nation, and Brain Station 23's career pages (at-a-glance intro, why-work-here, perks, culture/values, open-roles CTA, hiring process) and adapted the pattern honestly for a brand-new, founder-led studio — confirmed with you first that there are **no fixed job openings yet**, so the page runs as a general talent-pipeline: why join early, what to realistically expect (no fabricated perks — no gym/transport/unlimited-PTO claims like the bigger reference companies have, since those aren't true here), the kind of roles we'd want to hear from (Automation & Backend, AI-minded, Full-Stack), a 3-step hiring process, and a direct "email your resume" CTA (`mailto:` with a pre-filled subject) rather than a fake application portal.
- [x] Verified in-browser end to end, including that both `mailto:` links (inline text and the CTA button) resolve correctly.

## Since rev 5 (this session) — Motion animation

- [x] Verified current Motion for React API directly from motion.dev docs before writing any code (package is `motion`, import path is `motion/react`, not the old `framer-motion` package) — confirmed there are actually **two different products both called "Motion"**: motion.dev (the animation library, used below) and a separate paid AI video-generation tool exposed to this session via MCP (`create_video` etc.) — see the video note below.
- [x] Installed `motion`, wired up via `LazyMotion` + `domAnimation` (`src/components/motion-provider.tsx`, `src/lib/motion-features.ts`) in `strict` mode — Motion's own documented pattern for keeping the animation runtime out of the initial bundle (~4.6kb to start rather than the full library), and `strict` mode means any accidental non-lazy `motion.*` usage would fail loudly instead of silently bloating the bundle.
- [x] `src/components/reveal.tsx` — a small reusable fade-and-rise-on-scroll wrapper, applied moderately (hero + one heading per section) across Home, Systems, Process, Career, and About — **not** applied to every element, per the "small number of signature animations, not animating everything" brief. Fully inert (renders a plain static tag, no motion at all) when `prefers-reduced-motion` is set, via Motion's `useReducedMotion` hook.
- [x] **One signature visual**: `src/components/workflow-diagram.tsx` on the homepage — "A manual task → An AI agent or automation → Your existing tools → A better outcome," implemented as SVG nodes/icons (lucide-react, no robot/brain imagery) with an animated connecting line (`pathLength` draw-in on scroll, plus a slow, subtle looping pulse afterward). This is the one deliberately more elaborate piece — chose SVG + Motion over Lottie/video/WebGL since it's simple geometry and text, and SVG+Motion is the lightest implementation that does the job. Responsive: swaps to a vertical layout below `md`. Verified via DOM inspection that the path actually animates from `pathLength: 0` to `1` and the pulse loops correctly.
- [x] `npm run build` / `tsc --noEmit` / `npm run lint` all still pass clean; verified in-browser with a fresh tab (no console errors) on Home and Systems.

### On the video-generation half of this brief
The brief also asked about generating motion-design/video assets. That capability is real and available to this session, but it's a **paid, per-video service — currently at 0 credits**, with a $5/200-credit minimum top-up (roughly 1-2 videos) or a $29+/mo plan. I did not spend anything without checking with you first. If you want a generated explainer (e.g. the "AI Agent Workflow" or "Lead → CRM → Sales" concepts from the brief) for the homepage or Systems page, say so and confirm the spend, and I'll generate it — but I'd suggest holding off until there's a real workflow/case study to actually depict, rather than an abstract stock-feeling motion graphic.

## Since rev 6 (this session) — richer color system + visual polish

You said the site had gotten "too basic" and asked for it to feel more like Field Nation / Brain Station 23 / Therap BD, plus images, video, and a fuller color combination. Here's what actually shipped vs. what's blocked and why:

- [x] **Expanded color system** (`src/app/globals.css`): the site was effectively one accent color (teal) on neutrals. Added a real 4-color system tied to actual site structure, not decoration — teal (AI Systems), violet (Business Automation), brass/amber (Software Engineering), green (positive outcomes) — plus tint variants for badge backgrounds.
- [x] Applied it everywhere the 3 service categories appear: homepage category cards, Systems page detail cards, and the homepage checkmark lists all now carry their category's color, which also makes the 3-pillar structure easier to scan at a glance.
- [x] The homepage's 4-item "Why us" grid and the workflow diagram nodes got matching colored icon badges instead of flat gray boxes.
- [x] Hero section got a background treatment (`bg-hero-glow` + `bg-dot-grid` utility classes) — a subtle radial color glow plus a masked dot-grid texture — the kind of visual depth those reference sites have in their hero without it being a photo.
- [x] The signature workflow diagram's connecting line is now a gradient sweeping through all 4 pillar colors instead of flat teal.
- [x] Verified in-browser end to end; `tsc` / `lint` clean throughout.

### Images and video — status and why they're not both just "done"
- **No AI image-generation tool is available in this session.** I checked. So "create images" can't mean literal photo generation from me — I built the visual richness above using color, layout, and original SVG/vector work instead (the workflow diagram, colored icon badges, hero background), which is the honest equivalent of what a designer would do without a photo shoot.
- **Real photos** (team, office, working) — I don't have any, and I'm not going to fabricate stock-style "team at work" images and present them as Zents Tech's actual people/office, since that directly contradicts the no-fake-claims approach the whole site (About, Career, homepage) is already built on. If you have real photos, send them and I'll place them properly (hero, About, Career).
- **Video** — there IS a real video-generation tool available to this session, but it's paid and currently at **0 credits** (~$5 minimum for 200 credits, roughly 1-2 videos). I flagged this before and still haven't spent anything without your explicit go-ahead. Asking again directly: want me to generate one (confirm the spend), or hold off until there's real footage/work to show?

## Since rev 7 (this session) — real photos + dark footer

You pushed back on "no images" and asked me to actually find real pictures instead of declining. Fair — I'd only checked for an AI image *generator*, not for real, properly-licensed photography I could source and place honestly. Fixed:

- [x] **Two real, freely-licensed photos** sourced from Unsplash (Unsplash License — free for commercial use) and saved locally to `public/images/`: a close-up of colorful code on a dark screen (`code-screen.jpg`), and a dashboard/metrics close-up whose teal/amber tones happen to match the site's own palette (`dashboard-metrics.jpg`). Both are anonymous/abstract shots — no people, no recognizable brand, no specific claimed data — chosen deliberately so they read as atmosphere, not as "here is our team" or "here is a real client's dashboard," since neither of those would be true yet.
- [x] Homepage hero: the plain white "Where the hours actually go" card is now a photo-backed card (code-screen.jpg, dark gradient overlay, white text) — same copy, much more visual weight, closer to the Field Nation / Brain Station 23 hero treatment you asked for.
- [x] Systems page: added a full-width photo banner (dashboard-metrics.jpg) between the category cards and the productized-services grid, tied to the "every system ships with monitoring" message.
- [x] **Footer is now dark** (near-black navy `#0d121c`, light text, bright teal accent for headings) instead of matching the light page — a deliberate dark anchor at the bottom of every page, like the reference sites use.
- [x] `Logo` component got a `variant="dark"` mode so the wordmark reads correctly on the new dark footer.
- [x] Verified in-browser (fresh tab, no console errors); `tsc`/`build`/`lint` all clean.

Still true from before: no AI image *generator* is available in this session, and I still won't fabricate photos claiming to be Zents Tech's actual team/office — the two images above are honestly generic. If you get real photos taken (team, workspace, a client call), send them and I'll swap them in properly. Video is still the same paid/0-credit situation as before — still waiting on your go-ahead there.

## Since rev 8 (this session) — full-bleed hero photo + more images

- [x] **Homepage hero rebuilt as a full-bleed background photo** (`hero-workspace.jpg` — a real, anonymous person at a desk, warm window light, laptop with a dashboard visible), not just a small card. Left-to-right gradient scrim keeps the headline/CTA legible on the left while the photo shows through more on the right; the "Where the hours actually go" list is now a glass/blur card floating on top of the photo instead of a plain white card.
- [x] **Slow left-right drift animation** on the hero photo (`hero-bg-pan` keyframe in `globals.css`, 24s loop, subtle ~5% pan with a slight scale so no edges show) — confirmed running via computed styles in-browser. Freezes to a static frame under `prefers-reduced-motion`.
- [x] Outline CTA button on the photo hero got a frosted-glass treatment (white border/text on translucent white) so it reads correctly against a photo instead of the old light-page style.
- [x] **Two more real photos added**: a sunlit desk with sticky notes on the About page (fits the "small studio, on purpose" framing much better than a slick corporate office shot would), and the code-screen photo (freed up from the old hero card) reused on the Career page, which had no imagery before.
- [x] Verified in-browser across Home, About, Career — fresh tabs, zero console errors; `tsc`/`build`/`lint` all clean.

Same honesty note as before: all photos are anonymous/generic (no identifiable faces used as if they were specific real employees), sourced from Unsplash under its free commercial-use license. If real photos come in later, swap-in is straightforward — one `<Image src>` per spot.

## Since rev 9 (this session) — blurred nav + hover mega-menus

- [x] **Header is now a frosted-glass sticky bar** — semi-transparent background with `backdrop-blur-md`, so page content blurs through underneath it (visible clearly over the new hero photo).
- [x] **"Systems" is now a hover dropdown** listing the 3 categories (with their color-coded icon badges), each linking straight to its own card on the Systems page (`/systems#ai-systems`, `#business-automation`, `#software-engineering`), plus a "see full architecture & pricing" link at the bottom. Built with shadcn/Base UI's `NavigationMenu` (already installed from the first pass, just unused until now).
- [x] **"Process" got the same treatment**, hover-listing all 6 lifecycle steps with a one-line description each, linking to their own anchor on the Process page, same "see the full process" link at the bottom.
- [x] Added scroll-margin anchors (`id`) to the Systems page's 3 category cards and the Process page's 6 timeline steps so these deep-links land in the right spot without hiding under the sticky header.
- [x] Mobile menu unaffected — still a flat link list (dropdowns don't make sense on mobile, so it intentionally didn't get the mega-menu treatment).
- [x] Verified in-browser: hovering shows the right content, clicking a sub-item navigates and scrolls to the exact card, dropdown closes correctly after navigating away. `tsc`/`build`/`lint` all clean.

## Since rev 10 (this session) — real founders, finally

You sent real photos and real links for both founders, which changes the honesty calculus from earlier revs — this is now genuine, verifiable content, not something I need to work around.

- [x] **Founders section added to the About page** (`/about`) with real photos, names, titles, LinkedIn links, and (for Shafi) a portfolio link — `shafi-founder.jpg` and `arnob-cofounder.png` in `public/images/` (renamed from the original filenames to remove a space and match the project's kebab-case convention).
- [x] **Shafi's bio is grounded in his actual portfolio** (fetched mirzashafi.com directly rather than guessing): AI/software engineer, RAG pipelines, autonomous AI agents, n8n automation, FastAPI/Node.js — i.e., this is literally the same work Zents Tech now does as a company. Cited from his own site, not invented.
- [x] **Arnob's bio is intentionally minimal** ("Co-founder at Zents Tech.") — you gave me a name, role, and LinkedIn, not a bio, so I didn't invent one. Send details whenever you want it filled in.
- [x] Updated the About hero paragraph to name both founders directly instead of the generic "founder-led" phrasing used before.
- [x] Verified in-browser: photos render, all LinkedIn/portfolio links point to the exact URLs you gave; `tsc`/`build`/`lint` clean.

## Since rev 11 (this session) — corrected founder details

- [x] Corrected co-founder's real name in the Founders section: **Shoeb Mahfuz** (not "Arnob" — that was a placeholder guess from the LinkedIn handle before you gave the actual name), with his stated role, **Network & Cybersecurity Enthusiast**, shown under his title.
- [x] Founder's card now shows the full formal name, **Mirza Md. Shafi Uddin**, with "AI & Software Engineer" as a matching role line (the hero paragraph above still uses "Shafi" for readable prose — cards carry the formal names, running text uses first names).
- [x] Shoeb's bio is no longer just "Co-founder at Zents Tech" — it now ties his stated security background to something concrete Zents Tech actually does (checking that what ships is resilient/secure, not just functional), without inventing credentials you didn't give me.
- [x] Verified in-browser, `tsc`/`build`/`lint` clean.

## Since rev 12 (this session) — Contact page overhaul + role fix

- [x] Fixed Shoeb Mahfuz's title: **Network & Cybersecurity Engineer** (was "Enthusiast" from the previous rev, before you corrected it) — bio text adjusted to match the more established professional framing.
- [x] **Contact page fully rebuilt.** It was the most basic page left on the site (no animation, plain stacked list, no visual system applied). Now:
  - Same hero-glow + dot-grid background treatment as the homepage
  - The email/WhatsApp/location list became 4 color-coded contact-method cards (added **Facebook**, which was missing from this page even though it's in the footer), each a real clickable link
  - A "What happens next" 3-step section (reach out → personal reply within one business day → scoped Audit) so a first-time visitor knows what to expect before filling the form
  - A **new FAQ accordion** (5 questions) covering the things people actually hesitate on before writing in — international clients, uncertainty about what to ask for, pricing (points to the real Systems page ranges, no invented numbers), NDAs — built with shadcn's Accordion component, already installed but unused until now
- [x] Verified in-browser: contact cards link correctly, FAQ accordion opens/closes correctly, no console errors; `tsc`/`build`/`lint` clean.

## Since rev 13 (this session) — contact form fix + Process page animation

- [x] **Fixed the contact form card's empty space** you flagged in a screenshot — the two-column grid had no `items-start`, so CSS stretched the (shorter) form card to match the height of the (taller) left column, leaving dead space below the Send button. Added `items-start` and a small trust line under the form so the card now sizes to its own content properly.
- [x] **Process page timeline is now animated** (`src/components/process-timeline.tsx`): the connecting line draws in once the timeline scrolls into view, and each numbered checkpoint fills from idle (gray) to active (teal) as it's individually scrolled past, with its content fading/sliding in alongside it.
- [x] **Caught and fixed a real bug while verifying this**, not just a screenshot artifact this time: the first version used `viewport={{ margin: "-100px" }}` on the scroll triggers, and that negative-margin shorthand silently broke Motion's visibility detection — checkpoints never activated at all, confirmed via computed-style checks at multiple scroll positions. Removed the margin (matching the exact working pattern already used in the homepage's workflow diagram) and reverified with a simulated gradual scroll: all 6 checkpoints now activate correctly in sequence.
- [x] `tsc`/`build`/`lint` all clean.

## Since rev 16 (this session) — real 3D animation on the homepage

- [x] **Replaced the old flat SVG workflow diagram with a real WebGL 3D scene.** Added `three`, `@react-three/fiber`, `@react-three/drei` and built `src/components/workflow-scene-3d.tsx`: four wireframe icosahedron "nodes" (Manual task → AI/automation → Your tools → Outcome) floating in real 3D space with depth, connected by lines, gently drifting (`Float` from drei) and swaying as a group. The group also tilts toward the cursor (lerped toward pointer position) for a subtle parallax feel on hover.
- [x] Client-only loaded via `next/dynamic` (`ssr: false`) in `src/components/workflow-3d-section.tsx`, which pairs the canvas with the existing HTML labels underneath — wired into the homepage's "Same task. Different shape." section in place of the retired `WorkflowDiagram` (old file left in place, unreferenced, in case any styling from it is wanted again).
- [x] **Caught a real bug before it shipped**: the first draft used continuous accumulating rotation, which would eventually spin the 4 nodes past the point where their left-right screen order matches the static HTML labels below them (e.g. "Outcome" visually swapping to the left side while its label stays on the right). Fixed by capping the sway to a bounded sine oscillation (~±22°) plus a small pointer-tilt (~±15°) — comfortably under the 90° threshold where the order could flip. Verified by comparing screenshots at load vs. after 8s of continuous motion: node order stayed stable (gray → teal → violet → green) in both.
- [x] Respects `prefers-reduced-motion` — the sway (not the pointer-tilt) is disabled via the existing `useReducedMotion()` hook.
- [x] Verified on mobile viewport (375px) too — canvas renders and nodes stay correctly ordered at the smaller size.
- [x] `tsc` / `npm run build` / `npm run lint` all clean.

## Since rev 17 (this session) — cursor-reactive glow on key sections — removed in rev 18, see below

- [x] Added `src/components/cursor-glow.tsx`: a small client component that eases a soft radial glow toward the pointer within its parent section (rAF + lerp, not React state, so it doesn't cause re-renders). Skips itself entirely on touch devices (`matchMedia("(hover: hover) and (pointer: fine)")`) and under `prefers-reduced-motion` — no persistent cursor to react to either way, so it's a clean no-op rather than a degraded version.
- [x] Wired into the **homepage hero** (`screen` blend, teal, brighter — reveals more of the background photo where the cursor moves without covering the text) and the **final CTA section** (plain blend, very low opacity — a faint spotlight on the light background, not a dark-theme effect forced onto a light one).
- [x] Verified in-browser: glow fades in on first move, tracks the pointer to different points within each section, and fades out on `pointerleave`; text over the hero stays fully readable.
- [x] `tsc` / `npm run lint` clean.

## Since rev 18 (this session) — removed the cursor glow, animated the rest of the site instead

- [x] **Removed the cursor-reactive glow from rev 17** (`src/components/cursor-glow.tsx` deleted, both usages in `src/app/page.tsx` removed) — you asked for it gone in favor of animating the site more broadly instead of one hover effect on two homepage sections.
- [x] **Every page now uses the same scroll-reveal language the homepage already had** (`src/components/reveal.tsx` — fade + rise into view, once per element): extended it to sections that previously loaded in static, on Systems, Process, About, Career, Contact, and Case Studies. Grid/list items (service cards, founder cards, career reason/expectation/role cards, contact FAQ, productized offers, etc.) now stagger in with a small per-item delay instead of appearing all at once — the same pattern the homepage's service-category cards already used.
- [x] Privacy and Terms pages get a single fade-in on their header block only — the dense legal text itself isn't chopped into individual scroll reveals, since animating every paragraph of a document people are trying to actually read works against them, not for them.
- [x] Custom 404 page also fades in on load now.
- [x] Verified anchor-jump links still work correctly after wrapping the Systems category cards in `Reveal` — navigating straight to `/systems#ai-systems` lands on a fully visible card, not a hidden one waiting to animate in.
- [x] `tsc` / `npm run lint` / `npm run build` all clean across all 18 routes. Spot-checked Home, Systems, and About in-browser — reveals and stagger fire correctly on scroll, no console errors.

## Since rev 19 (this session) — bigger, more confident type scale (Brain Station 23 reference)

- [x] **Checked brainstation-23.com's actual computed styles** (not just eyeballing) — their hero H1 runs 48px, and section H2s run 40px, both well above what most of our in-page section headers were using. Used that as the benchmark rather than guessing at "bigger."
- [x] **Pushed every tier of the heading scale up one notch, sitewide** (Home, Systems, Process, About, Career, Contact, Case Studies, 404):
  - Page hero H1: `text-4xl md:text-5xl` (36/48px) → `text-5xl md:text-6xl` (48/60px), plus `tracking-tighter` for a denser, more premium letterform at that size.
  - Major section H2s (the ones with an eyebrow above them): `text-3xl md:text-4xl` → `text-4xl md:text-5xl`.
  - In-page section headers that had no responsive bump at all — About's "Founders" / "What we believe" / etc., Career's five section headers — were the biggest gap versus the reference site (24px, static). Bumped to `text-3xl md:text-4xl`.
  - Systems page's in-card category headings ("AI Systems", "Business Automation," "Diagnostics") got a smaller, proportionate bump (`text-2xl md:text-3xl`) since they share a compact two-column card with pricing detail, not a full-width section.
- [x] **Left card-level and list-item titles alone on purpose** (founder names, principle titles, productized-service names, timeline step labels) — the reference site keeps the same contrast: huge section headlines against comparatively modest card content. Bumping everything uniformly would have flattened that hierarchy instead of making the site look more professional.
- [x] Left Privacy/Terms headings untouched — legal pages intentionally stay plain, not part of the marketing type scale.
- [x] Verified in-browser on desktop and mobile (375px) — headlines wrap cleanly with no overflow, `text-balance` still holds; confirmed via screenshots on Home, About, and Systems.
- [x] `tsc` / `npm run lint` / `npm run build` all clean across all 18 routes.

## Since rev 20 (this session) — dark tech-stack marquee section on the homepage

- [x] Added a new dark-navy homepage section, referenced from a screenshot of a similar section on another agency's site: "Yes! Here's the stack we actually build with," with a two-row, opposite-direction scrolling marquee of real tools underneath. Sits between the Systems overview and "How we work" sections.
- [x] **Reused the existing `--footer-bg`/`--footer-fg`/`--footer-muted` tokens** for the dark background instead of inventing a new near-duplicate navy — same color already used for the dark footer, so this doesn't add a fourth color to the palette.
- [x] **The tool list is deliberately not a copy of the reference site's list** — it names only technologies already established elsewhere in this site's own copy (n8n, Make, RAG pipelines, AI agents, WhatsApp API, Meta Graph API, React/Next.js, per the About and Career pages) plus their obvious, standard companions (Node.js, TypeScript, PostgreSQL, Google Sheets, CRMs, REST APIs, webhooks). Copying the reference site's actual list (Java, WordPress, iOS, Ruby on Rails, Angular) would have claimed expertise this site has never claimed anywhere else — that's exactly the kind of unearned breadth-claim the site's own copy already argues against ("not 'cutting-edge AI technology'").
- [x] Built as a plain server component (`src/components/tech-marquee.tsx`) with a pure-CSS marquee animation (`animate-marquee-left` / `-right` in `globals.css`) — no client-side JS, no `useReducedMotion` hook needed; reduced motion is handled by a `prefers-reduced-motion` media query that freezes the animation, the same pattern already used for the hero's background pan.
- [x] Verified in-browser: both rows scroll continuously in opposite directions, edges fade via a mask-image gradient, renders correctly on mobile (375px) too.
- [x] `tsc` / `npm run lint` / `npm run build` all clean.

## Since rev 21 (this session) — filled out the empty-feeling 3D workflow section

- [x] **You flagged the "Same task. Different shape." section as feeling empty** ("faka faka lagteche") — the 3D nodes floated in a lot of bare white space with nothing else going on around them.
- [x] **Contained the visual in a panel** instead of letting it float on the plain page background: a rounded, bordered card using the same `bg-hero-glow` gradient + `bg-dot-grid` pattern already established on the Contact page hero — reused, not reinvented, so the site doesn't pick up a fourth background treatment.
- [x] **Added animated "data flow" particles** along the connecting lines between the 3D nodes (`FlowParticles` in `workflow-scene-3d.tsx`) — small glowing spheres that continuously travel from one node to the next, colored by the destination node, fading in/out at each end. Fills the empty space between nodes with motion that actually reinforces the "work moving through a system" idea, instead of decoration for its own sake. Skipped entirely under reduced motion.
- [x] Enlarged the canvas (`240–380px` tall → `280–420px`) and the node geometry slightly, so the visual has more presence inside its new panel.
- [x] Verified in-browser at mobile, standard desktop, and 1440px — panel scales cleanly at all three, particles visibly animate between screenshots taken a few seconds apart, node left-to-right order still matches the labels underneath (the ordering fix from rev 16 still holds).
- [x] `tsc` / `npm run lint` / `npm run build` all clean.

## Since rev 22 (this session) — undid the gradient, made it compact, one-line heading

- [x] **The rev 21 gradient/dot-grid panel looked worse, not better** (your call) — removed `bg-hero-glow` and the dot-grid overlay entirely. The panel is now a plain bordered card (`border border-border bg-muted/20`), no color wash.
- [x] **More compact overall**: section padding `py-20 → py-16`, gap before the panel `mt-12 → mt-8`, panel padding `py-14/16 → py-8/10`, panel width `max-w-4xl → max-w-3xl`, canvas height back down (`280–420px → 220–300px`, and the node geometry with it) — the rev 21 sizing was overcorrected.
- [x] **"Same task. Different shape." now sits on one line** on tablet/desktop — the heading was wrapping because its wrapper had a `max-w-xl` cap (576px) that was too narrow for the phrase at the bumped-up rev 19 font size, not because of the font size itself. Removed that cap; it still wraps naturally on narrow phones, same as every other heading on the site does, since there's no way to guarantee one line at 375px without shrinking the font back down.
- [x] Kept the flow-particle animation from rev 21 — that part wasn't the complaint.
- [x] Verified in-browser on desktop and mobile; `tsc` / `npm run lint` / `npm run build` all clean.

## Since rev 23 (this session) — "Join Our Team" section, honestly

- [x] Added a "Join Our Team" section to the homepage, referenced from a screenshot of a similar section elsewhere: dark panel, heading, short line, "Visit Career" button linking to `/career`, photo on the right. Placed between "Why us" and the final CTA.
- [x] **Flagged and resolved a fabrication risk before building it**: the reference screenshot's photo showed a 9-person team — Zents Tech is two people. Asked you how to handle it rather than dropping in a random "team photo" that would misrepresent company size to visitors and candidates; you picked a generic workspace photo with no people in it, consistent with the honesty policy already applied to case studies, client counts, and the About page's real-founders-only photos.
- [x] Sourced a genuinely free-to-use Unsplash photo (`public/images/join-team-office.jpg` — modern open office, empty desks and chairs, Unsplash License, verified as "Download free" and not an Unsplash+/Getty paid asset before using it).
- [x] Copy matches what the Career page already says (small on purpose, real ownership, no fixed job postings) rather than introducing a new, inconsistent claim.
- [x] Reused the `--footer-bg` dark tokens again, same as the tech-stack marquee — still no new colors added to the palette.
- [x] Verified in-browser on desktop and mobile; the "Visit Career" button correctly routes to `/career`. `tsc` / `npm run lint` / `npm run build` all clean.

## Not done yet — what's left

### Blocking for launch
1. **Domain not live.** Neither `zentstech.com` nor `zents.tech` resolves to anything right now (checked 2026-09-01). Confirm you actually own `zentstech.com`, then point DNS at wherever this gets deployed.
2. **No real hosting/deployment.** Site only runs locally (`npm run dev`). Needs a deploy target — Vercel is the natural fit for Next.js and was the recommended stack (and is what Analytics above needs to actually turn on).
3. **Contact form doesn't send real email.** `src/app/api/contact/route.ts` validates and logs to the server console only — there's a `TODO` in the file. Needs a real delivery mechanism (Resend, SES, or forwarding inbox) wired in with an API key before this goes live, or inquiries will silently go nowhere.
4. **`hello@zentstech.com` isn't a real mailbox yet** (assumed placeholder throughout the site — footer, contact page, success message). Needs an actual inbox (Google Workspace / Zoho Mail / etc.) once the domain is live.

### Should do before announcing the site publicly — DONE (rev 15)
5. ~~No `robots.txt` / `sitemap.xml`~~ — [x] Added `src/app/sitemap.ts` (9 real routes, correct priorities) and `src/app/robots.ts` (allows everything except `/api/`, points at the sitemap). Verified both render correctly at `/sitemap.xml` and `/robots.txt`.
6. ~~No spam protection on the contact form~~ — [x] Added a honeypot field (`website`, visually hidden, `tabIndex={-1}`) to `ContactForm` and a server-side check in `/api/contact` that silently accepts-but-drops any submission where it's filled. Verified both directions: a real submission (field empty) still logs and succeeds; a simulated bot submission (field filled) returns 200 but is never logged as an inquiry.
7. ~~Custom 404 page~~ — [x] `src/app/not-found.tsx`, on-brand copy, links to Systems/Case Studies/Contact/Home. Verified it renders (with the real header/footer) on any unknown route.

### Case Studies page — added (rev 15), honestly
- [x] `/case-studies` added to primary nav. Since there's still no real client work to show, it does **not** contain fake case studies — it explains plainly that nothing's published yet, shows the exact format every real one will follow (Problem → What we built → Outcome), and ends with a "be our first" CTA. This satisfies the request without breaking the no-fabricated-content rule the rest of the site already runs on.

### On "also do phase 2" — a judgment call, flagging it rather than guessing
Phase 2 in the original strategy specifically meant "give Software Engineering its own marketed nav page **once 3–5 real case studies exist**" — i.e., it was gated on the case studies that still don't exist. Building that page now would put the site in the position of marketing proof it doesn't have yet, which contradicts everything else built this way. I held off on that specific piece rather than force it — Software Engineering still has real, non-fabricated presence via `/systems#software-engineering` and the homepage. If "phase 2" meant something more specific (an Industries page, a blog, something else), say which and I'll take a fresh look — but I didn't want to guess and build something that quietly undercuts the honesty policy.

## Suggested next order of work
1. Confirm domain ownership → deploy to Vercel → point DNS (this also switches Analytics on).
2. Wire real email delivery on the contact route + set up the `hello@zentstech.com` mailbox.
3. Everything else (real case studies replacing the placeholder page, a blog, a marketed Software Engineering page) waits for real client work per the phased plan.
