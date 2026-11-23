---
name: scouttal-design-motion
description: Apply Scouttal's restrained, premium UI and motion system when designing or updating this Next.js website. Use for pages, components, navigation, responsive layout, interactions, and animation; exclude mobile-native, Expo, Apple-platform, and Swift work.
---

# Scouttal Design and Motion

Keep Scouttal clear, confident, minimal, and professional. The visitor journey should communicate one idea at a time and move naturally from promise, to service, to proof, to action.

## Design decisions

- Preserve the navy, white, and blue identity and the existing typography, spacing, radius, shadow, and motion tokens in `app/globals.css`.
- Prefer short, quotable copy and strong hierarchy over explanatory paragraphs.
- Keep navigation and calls to action obvious. Do not add decorative arrows to buttons or links.
- Use imagery or diagrams only when they clarify a service or idea. Avoid decorative clutter and detailed role lists on overview pages.
- Decorative numbering is unnecessary. Keep numbers only when they communicate a real sequence.
- Extend existing components and tokens before creating new visual systems.

## Motion decisions

- First decide whether motion has a purpose: feedback, state indication, spatial consistency, explanation, or prevention of a jarring change.
- Use CSS transitions for interaction feedback and CSS keyframes only for rare, one-shot marketing entrances.
- Animate `transform` and `opacity`; avoid layout-property animation unless a measured disclosure requires it.
- Keep routine UI motion under 300ms. Use `--ease-out` for entrances and responses and `--ease-in-out` for movement already on screen.
- Give pressable controls subtle `scale(0.97)` feedback. Gate hover motion behind `(hover: hover) and (pointer: fine)`.
- One entrance per container. Do not stagger navigation rows, FAQ items, dropdown options, or other frequently used controls.
- Honor `prefers-reduced-motion`: remove movement and delays while retaining brief opacity or color feedback.
- Do not install a motion library for effects CSS can express.

## Next.js implementation

- Read the relevant guide in `node_modules/next/dist/docs/` before changing Next.js APIs or conventions.
- Keep pages as Server Components unless state, event handlers, lifecycle logic, or browser APIs require a narrow Client Component.
- Keep global tokens and truly global rules in `app/globals.css`; use scoped styles for complex new components when appropriate.
- Run typecheck, lint, production build, and visual QA at desktop and mobile widths before publishing.

## Imported references

Read only the reference needed for the task:

- Building one animation: `../../../.claude/skills/animate/SKILL.md`
- Coordinating a hero or multi-element transition: `../../../.claude/skills/choreograph/SKILL.md`
- Performance decisions: `../../../.claude/skills/animation-performance/SKILL.md`
- General design-engineering craft: `../../../.claude/skills/emil-design-eng/SKILL.md`
- Reviewing motion: `../../../.claude/skills/review-animations/SKILL.md` and its `STANDARDS.md`

Treat the remaining imported `.claude/skills` as optional source material, not as default instructions for this web project.
