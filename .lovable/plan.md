## Goal

Redesign every section of the Scholars Cafe homepage with a more premium, editorial feel inspired by Crimson Education and Athena Education — while keeping your current navy + sky-blue palette. Pull in fresh content ideas from College Essay Guy for the resources/knowledge sections.

## Approach

I'll work in passes so you can review progress and stop me at any point if you want to change direction. Each pass keeps dark mode working.

### Pass 1 — Content gathering
- Scrape College Essay Guy's resource pages, guides index, and key articles using Firecrawl
- Pull article titles, teasers, categories, and structure
- Save adapted content into `src/lib/scholars-data.ts` so the new sections have real, useful info instead of placeholders

### Pass 2 — Visual system upgrade
- Refined typography scale (larger display headings, tighter line-height like Crimson)
- Editorial section headers with kicker labels + numbered indicators
- Asymmetric grid layouts replacing uniform card grids
- Subtle motion on scroll (parallax accents, staggered reveals)
- More generous whitespace and stronger visual hierarchy

### Pass 3 — Section redesigns (in order of impact)
1. **Hero** — large editorial headline, side-by-side image collage, trust badges row
2. **Stats** — animated counters with bold typography on a dark band
3. **Destinations** — country cards with hero imagery and hover details (Crimson-style)
4. **Programs** — magazine-style layout with featured program
5. **Services** — bento-grid mix of large + small cards
6. **Process** — vertical timeline with sticky scrolling
7. **Test Prep** — split-screen with course breakdown
8. **University Explorer** — keep, but restyle with new card design
9. **Success Stories** — large quote-led layout instead of small cards
10. **Knowledge Hub (Resources)** — magazine grid with featured article + categories (College Essay Guy structure)
11. **About / FAQ / Newsletter / Contact** — refined typography and spacing

### Pass 4 — Polish
- Verify dark mode across every new section
- Check responsive behavior at mobile, tablet, desktop
- Final pass on motion and micro-interactions

## What stays the same
- Brand colors (`navy #0c2d5e`, `sky #0ea5e9`)
- Site structure and navigation
- All existing functionality (WhatsApp CTAs, theme toggle, university explorer logic)

## Technical notes
- Firecrawl needs to be enabled as a connector for content scraping. If it's not, I'll fall back to writing fresh adapted copy that matches College Essay Guy's structure
- I'll use semantic dark-mode tokens throughout new sections (no hardcoded hex) so dark mode stays clean
- Reuse existing `Reveal`, `RevealStagger`, `ScholarIcon` primitives where they fit; build new ones (e.g. `Marquee`, `Timeline`, `BentoCard`) where needed

## Heads up on scope
This is a large redesign — roughly 10-15 component rewrites plus new shared primitives. I'd recommend I do **Pass 1 + 2 + Hero/Destinations/Stats/Resources first** so you can see the new direction on the most impactful sections, then decide whether to continue with the rest. Otherwise we risk a long run before you can react to the look.

Reply "go" to start, or tell me to adjust scope/order before I begin.