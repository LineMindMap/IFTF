# IFTF website

English-language Next.js App Router + TypeScript + Tailwind + Framer Motion preview. Combines institutional editorial design, human stories, and global reach. Uses the supplied IFTF logo.

## Run

Node.js 22+ and pnpm: `pnpm install`, then `pnpm dev`. Open http://localhost:3000.

Checks: `pnpm typecheck`, `pnpm lint`, `pnpm build`. Static output is written to `out/` for GitHub Pages.

## Content and scope

Shared content is in data/content.ts. IFTF is active in Pakistan and Indonesia, with Education and Community Prosperity as its focus areas. The Yogyakarta contact details are on the Contact page. Photography is illustrative, and program descriptions are draft copy. Login, letter verification, and payments are planned features. Search engine indexing is disabled while the content is under review.

## Assets

Logo: user supplied. Illustrative photograph: https://images.unsplash.com/photo-1509099836639-18ba1795216d . Replace with approved IFTF photography before launch.

## GitHub Pages

In the GitHub repository, open Settings → Pages and choose GitHub Actions as the publishing source. The workflow publishes pushes to main and can also run manually. It automatically uses the path provided by GitHub Pages so internal links, images and scripts load on project URLs.


## Navigation and status

Edit `aboutMenu` in `data/content.ts` to set the Sustainability, President’s Office, and Chairman’s Office URLs. Until a URL is supplied, each item opens its local pending page.

The Website Status page lists unfinished routes automatically. Update `liveRoutes` when a page is ready and add deferred requests to `deferredWork` when recording them. The service indicators check page reachability from the visitor’s browser.
