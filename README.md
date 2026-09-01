# Zents Tech

The marketing website for **Zents Tech** — an AI Systems & Business Automation studio based in Dhaka, Bangladesh, founded by Mirza Md. Shafi Uddin and Shoeb Mahfuz.

Live domain (not yet deployed): `zentstech.com`

## Tech stack

- **Next.js 16** (App Router, Turbopack) + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (built on [Base UI](https://base-ui.com), not Radix)
- **Motion** (`motion/react`) for scroll-triggered animation, loaded via `LazyMotion` in `strict` mode
- **Three.js** + **React Three Fiber** + **drei** for the homepage's 3D workflow visualization
- **Anthropic SDK** for the site's chat widget (falls back to a rule-based FAQ matcher when no API key is set — see below)
- **Vercel Analytics**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint
npx tsc --noEmit  # typecheck
```

## Environment variables

None are required to run the site locally — everything works out of the box.

| Variable | Required? | Effect |
|---|---|---|
| `ANTHROPIC_API_KEY` | No | Without it, the chat widget (`/api/chat`) answers from a small set of curated FAQ triggers and is honest when it doesn't know something. With it set, the same route calls Claude (`claude-haiku-4-5-20251001`) with a system prompt grounded in this site's own real content (services, pricing, process). No other code changes needed to switch — just add the key to `.env.local`. |

## Project structure

```
src/
  app/
    page.tsx                 Home
    services/                Services overview + /services/[slug] detail pages
    process/                 How an engagement moves, step by step
    case-studies/            Honest placeholder — publishes as real engagements land
    blog/                    Listing + /blog/[slug] posts
    career/, about/, contact/
    privacy/, terms/
    api/
      contact/route.ts       Validates + logs contact form submissions (no real email sending yet)
      chat/route.ts          Chat widget backend — see Environment variables above
    sitemap.ts, robots.ts, not-found.tsx
  components/                Shared UI: header, footer, chat widget, 3D scene, animated components
  lib/
    site-data.ts             Nav, contact info, service categories, pricing, lifecycle, FAQs
    blog-data.ts             All blog post content
```

## Content model

Almost all site copy lives in two typed data files rather than being scattered across JSX:

- **`src/lib/site-data.ts`** — navigation, contact details, the three service categories (with real BDT/USD pricing), productized offers, the client lifecycle, and the FAQ list shared between the Contact page and the chat widget.
- **`src/lib/blog-data.ts`** — every blog post's metadata and body content, as an array of typed blocks (`p` / `h2` / `ul`) rendered by `src/app/blog/[slug]/page.tsx`.

Editing either file updates every page that reads from it — for example, adding a service category automatically gives it a homepage card, a `/services/[slug]` detail page, a footer link, and a sitemap entry.

## A note on this site's content policy

This site deliberately doesn't fabricate trust signals: no invented client names or case studies, no made-up team size or years of experience, no stock photos presented as "our team" unless the people are real. `/case-studies` is an intentionally honest placeholder until real engagements exist to publish. Keep this in mind before adding new copy or imagery — see `progress.md` for the reasoning behind specific past decisions.

## Progress log

`progress.md` at the project root is a running changelog of what's been built, what's left, and the reasoning behind non-obvious calls (naming, honesty-policy tradeoffs, bug fixes). Check it before assuming something is or isn't done.

## Deployment

Not yet deployed. The natural target is Vercel (Next.js's own platform); see `progress.md`'s "Blocking for launch" section for what's still needed first (domain DNS, real email delivery on the contact form, a real mailbox for `hello@zentstech.com`).
