# IFTF website

English-language Next.js App Router + TypeScript + Tailwind + Framer Motion preview. Combines institutional editorial design, human stories, and global reach. Uses the supplied IFTF logo.

## Run

Node.js 22+ and pnpm: `pnpm install`, then `pnpm dev`. Open http://localhost:3000.

Checks: `pnpm typecheck`, `pnpm lint`, `pnpm build`. Static output is written to `out/` for Sites hosting.

## Content and scope

Shared content is in `data/content.ts`. All impact values are null pending verified data and an as-of date. Photography is illustrative, not evidence of IFTF projects. Program copy is proposed. Inner pages are explicit stubs; no login, verification, payment, newsletter or submission service is active. The global section filters regions but does not claim operating countries. Reports are forthcoming placeholders. Search-engine indexing is disabled for this preview.

Brand red is provisional pending a vector logo/brand guide. Fonts use local Georgia and Arial fallbacks to avoid remote font dependencies. Domain is undecided; internationalftf.org is not configured.

## Assets

Logo: user supplied. Illustrative photograph: https://images.unsplash.com/photo-1509099836639-18ba1795216d . Replace with approved IFTF photography before launch.

## Hosting

`.openai/hosting.json` retains the Sites identity. Do not create a replacement Site. The initial static deployment can migrate to server infrastructure when authentication and the CMS are implemented.
