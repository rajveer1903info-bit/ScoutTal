---
name: consulting-website-patterns
description: Apply evidence-based consulting website structure and user-journey patterns when improving Scouttal pages, navigation, services, proof, FAQs, and conversion paths. Use for consulting or recruitment marketing UX; do not copy third-party branding, prose, assets, or source code.
---

# Consulting Website Patterns

Use the three public reference sites below as pattern evidence, not as templates. Preserve Scouttal's own brand, copy, Next.js architecture, and `scouttal-design-motion` rules.

## Build the journey

- Lead with one outcome-focused promise and one primary action.
- Follow the promise with a short service overview that helps visitors self-select without role-by-role detail.
- Add proof close to the claim it supports: outcomes, case studies, testimonials, or a credible founder story.
- Give important intents their own routes. Keep Services, Industries, About, FAQ, and Contact or Booking independently reachable from navigation when content justifies them.
- End each page with a relevant next step instead of repeating every possible action.

## Keep the interface useful

- Use a stable header, clear active states, and a compact mobile menu.
- Pair selected sections with purposeful photography or distinctive illustrations, but never use imagery as filler.
- Prefer short cards, descriptive headings, and generous spacing over long explanatory blocks.
- Make booking and contact paths visible without placing competing calls to action in the same viewport.
- Treat FAQs as a dedicated information destination when they contain substantial content; use compact accordions only for genuinely secondary questions.
- Preserve accessible landmarks, semantic headings, useful alternative text, keyboard operation, and reduced-motion behavior.

## Source-specific lessons

- [Ansari Asif consulting site](https://github.com/ansari-asif/consulting_website.github.io): clear promise, service cards, case-study imagery, team proof, and repeated conversion opportunities. Borrow the information rhythm, not its Bootstrap structure or copy density.
- [Causable](https://github.com/silvia-maier/causable): calm editorial hierarchy, restrained navigation, illustration-led service categories, and a focused contact reveal. Borrow its clarity and character, not its brand assets, fonts, illustrations, or Liquid implementation.
- [Patrick Zender Consulting](https://github.com/PatrickZender/MyPersonalWebsite): separate routes for services, value proposition, booking, FAQ, and about content. Borrow the intent-based routing, not its visual styling or inline implementation.

## Apply to Scouttal

- Keep Scouttal broad enough for startups, SMBs, and established global companies.
- Describe recruitment services at the capability level; avoid exhaustive job-title lists.
- Keep the tone direct, trustworthy, and founder-relevant, with fewer words and stronger quotable lines.
- Prefer one polished visual idea per section and maintain Scouttal's navy, white, and blue system.
- Before implementation, check the existing page journey and reuse current components and tokens.
- After implementation, run typecheck, lint, production build, and desktop/mobile visual QA.

Do not add third-party source files or assets to Scouttal unless the user separately requests them and their license clearly permits reuse.
