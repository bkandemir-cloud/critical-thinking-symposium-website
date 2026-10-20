# Critical Thinking Symposium Website

A toolkit website for teachers supporting students applying to UK university humanities
programmes (Oxbridge and beyond). Live URL TBC; Astro 5, Cloudflare Pages.

## Stack

- Astro 5, static output, TypeScript strict
- No Tailwind: custom CSS with custom properties in `src/styles/global.css`
- Content lives as typed TypeScript data in `src/data/`
- Deployed via GitHub → Cloudflare Pages (build `npm run build`, output `dist`)

## Design

- Dark/intellectual palette: Charcoal `#1c1c2e` primary + Forest Green `#2d6a4f` accent
- Off-white background `#f7f6f2`
- Fonts: Fraunces (serif headings), Inter (body), Google Fonts
- Strapline: *Slow down. Think deeper.*

## Site architecture

| Route | Page |
|---|---|
| `/` | Home |
| `/toolkit/` | Interview Toolkit (question generator) |
| `/deep-dive/` | Deep Dive Reading |
| `/news/` | News & Events |
| `/resources/` | Courses & Resources |
| `/subjects/` | By Subject (landing) |
| `/subjects/[slug]/` | Individual subject pages |
| `/about/` | About / Teacher Notes |

## Content rules (important)

- Content author: Dr Beth Kandemir. Do not rewrite her text; flag additions for her to vet.
- British English throughout. Never use em dashes (use commas, colons, or parentheses instead).
- Reading list entries, quotations, and page references must be accurate. If uncertain, mark
  `UNVERIFIED` for the Site Editor to check — never invent citations.
- Sections marked `Note for Beth:` in yellow boxes are placeholders requiring her review.
- The question generator is entirely client-side static (no API calls). Template data lives in
  `src/data/questionTemplates.ts`.

## Subject slugs

`english-literature`, `history`, `philosophy`, `classics`, `economics`, `ppe`, `theology`

## Key concepts (philosophical backbone from the founding talk)

- **Tortoise over hare**: slow, deliberate thinking over reactive, answer-first thinking
- **Three question qualities**: simple, grey, deep
- **Three question forms**: "What is X?", "What is X for?", "What are the types of X?"
- **Five Whys**: five follow-up questions to uncover underlying assumptions
- **Grey-area cases**: borderline categorisation examples (hot dog/sandwich, Taiwan, virus)
- **Socratic dialogue**: thinking through conversation, not consumption

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the build locally

## Agents

- **Subsite Builder**: creates and edits pages, content, data
- **Site Editor** (b2133784): reviews and approves content before deployment
- **Deploy & QA** (54674ec2): handles branch QA and Cloudflare Pages deployment
