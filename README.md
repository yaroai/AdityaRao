# adityarao.com

Personal site for Aditya Rao — co-founder and technical operator at Yaro AI.

Forked from [alexdakhli.com](https://github.com/yaroai/AlexDakhli) and adapted per the PRD (`PRD.md` if added later). Same design DNA, different positioning: technical operator / ML / finance instead of content / distribution.

## Stack

Next.js 16, React 19, TypeScript, Tailwind v4. Same as Alex's site by design.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where to edit

- **All copy:** `src/lib/content.ts` (single source of truth — edit here, not in components)
- **Hero photo + about photos:** currently placeholder tiles. Drop real images into `public/images/` and swap `PortraitPlaceholder` / `PhotoPlaceholder` for `<Image>` in `src/components/sections/Hero.tsx` and `src/components/sections/About.tsx`.
- **Resume page:** `src/app/resume/page.tsx`. Has its own experience/education/skills constants — keep in sync with the home page teaser.
- **SEO / OG / domain:** `src/app/layout.tsx` and `src/lib/content.ts` (`siteConfig.url`).

## Outstanding before launch

Search the codebase for `FIXME:` — these are placeholders waiting on:

- Final domain
- Final 4 stats for the hero marquee
- Hero paragraph in Aditya's voice
- About-section prose in Aditya's voice
- Project descriptions: Polyedge, sports ML, GT NLP
- Real Calendly URL, primary email, primary social handle
- Real hero photo + 2 about photos
- Favicon
- Resume dates / titles / bullets

## Deployment

Vercel, same as Alex's site. Connect the repo, set the production domain, and ship.
