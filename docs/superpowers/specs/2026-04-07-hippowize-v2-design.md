# Hippowize V2 — Design Spec
**Date:** 2026-04-07  
**Reference style:** [wp.w3layouts.com/execution](https://wp.w3layouts.com/execution/)  
**Status:** Approved

---

## Overview

Rebuild the Hippowize website as a fast, single-page site using the Execution WordPress theme layout as the structural and visual template. The implementation is pure HTML + CSS + JS — no framework, no build step. All Execution layout patterns, animations, and interactions are preserved; all content and branding is replaced with Hippowize's own.

---

## Files

| File | Role |
|---|---|
| `index.html` | All markup — single page, all sections |
| `styles.css` | All styles — CSS custom properties, dark mode, responsive |
| `script.js` | Sticky nav, mobile menu, dark mode toggle, testimonial slider, back-to-top |

No additional files. Images are sourced externally (Execution theme CDN for decorative images, placeholder for team/blog until real assets are provided).

---

## Color & Typography

### Palette

| Token | Value | Use |
|---|---|---|
| `--primary-color` | `#2563EB` | Buttons, active nav underline, eyebrow text, quote icons, slider dots |
| `--secondary-color` | `#1E40AF` | Hover states, feature icons, team overlay social icons, blog meta button |
| `--heading-color` | `#0F172A` | All headings (`h1`–`h3`) |
| `--font-color` | `#475569` | Body / paragraph text |
| `--bg-color` | `#FFFFFF` | Default background |
| `--bg-soft` | `#F8FAFF` | Services section, testimonials section background |
| `--footer-color` | `#0F172A` | Footer top (links, about) |
| `--footer-dark` | `#060F1E` | Footer contact cards, copyright bar |
| `--border-color-light` | `#E2E8F0` | Card borders, dividers |
| `--shadow-color` | `rgb(37 99 235 / 8%)` | Card shadows — blue-tinted instead of neutral grey |

### Dark mode overrides

| Token | Dark value |
|---|---|
| `--font-color` | `#94A3B8` |
| `--bg-color` | `#0F172A` |
| `--bg-soft` | `#0A1020` |
| `--heading-color` | `#F1F5F9` |
| `--border-color-light` | `rgb(255 255 255 / 10%)` |
| `--shadow-color` | `rgb(0 0 0 / 40%)` |
| `--footer-color` | `#060F1E` |
| `--footer-dark` | `#020812` |

### Typography

- **Font family:** Inter (Google Fonts — weights 400, 500, 600, 700, 800)
- Replace all `"Montserrat"` references with `"Inter"`
- Font sizes and weights unchanged from Execution

---

## Sections

### 1. Header / Nav

- Logo: text mark — `H` in `--primary-color` (large, 35px) + `ippowize` in heading color
- Nav links: Home · About · Services · Why Us · Contact
- Search box retained
- Dark mode toggle retained
- Sticky behavior, mobile hamburger — identical to Execution

### 2. Hero

- Video background: reuse Execution theme video URL (same CDN source)
- Overlay: `rgb(15 23 42 / 55%)` — darker navy tint instead of neutral grey
- Headline: **"The future belongs to organizations that know how to transform"**
- Subheadline: **"Empower your vision of tomorrow with Hippowize's transformative and innovative solutions."**
- CTA button: **"Explore Services"** → `#services`

### 3. About

- Heading: **"Trusted by Organizations Across Sectors"**
- Body copy: short paragraph about Hippowize's transformation + consulting focus
- Feature 1: icon `fa-chess` · **"Strategy Consulting"** · Cybersecurity, GRC, PMO → VMO
- Feature 2: icon `fa-microchip` · **"Digital Transformation"** · ServiceNow, AI, Cloud, Automation
- Image: reuse Execution `about.jpg` (placeholder until Hippowize supplies asset)

### 4. Brand Logos Strip

- 6 client/partner logo slots
- Use Execution theme logo images as placeholders
- Section heading removed (strip only, same as Execution)

### 5. Services (3 cards)

| Card | Tag color | Title | Body |
|---|---|---|---|
| 1 | warm (red-tinted) | Strategy Consulting | Cybersecurity, GRC, PMO to VMO transition |
| 2 | blue | Digital Transformation | ServiceNow, AI, Data, Cloud, Automation |
| 3 | green | Training & Coaching | Jira, Confluence, Agile, Scrum, SAFe |

- Eyebrow: "Our Expertise"
- Section heading: **"Our Best Services"**
- Images: reuse Execution `s4.jpg`, `s5.jpg`, `s2.jpg`

### 6. Creative Solutions

- Eyebrow: "About the Company"
- Heading: **"Cyber Resilience & Innovation"**
- Body: two paragraphs on Hippowize's cybersecurity and AI-driven approach
- Video link retained (Vimeo placeholder)
- Image: reuse Execution `img2.jpg`

### 7. Team (4 cards)

Placeholder profiles until real headshots are provided:

| Name | Role |
|---|---|
| Alex Morgan | Strategy Consultant |
| Jordan Lee | Digital Transformation Lead |
| Taylor Smith | Cybersecurity Specialist |
| Casey Park | Training & Coaching Lead |

- Hover social overlay: Facebook, Twitter, LinkedIn (replace Google+ with LinkedIn)

### 8. CTA Banner

- Background: reuse Execution `bg3.jpg` with `rgb(15 23 42 / 70%)` overlay
- Heading: **"Ready to Transform Your Organization?"**
- Subtext: short supporting line
- Button: **"Book a Consultation"** → Calendly link (`https://calendly.com/hippowize` placeholder)

### 9. Testimonials (3 cards)

Placeholder client quotes representing sectors Hippowize serves:

| Quote title | Author | Location |
|---|---|---|
| "Strategy that delivered real outcomes" | Sarah Thompson | Toronto, Canada |
| "Our ServiceNow rollout exceeded expectations" | Marcus Osei | Montreal, Canada |
| "Best Agile coaching we've experienced" | Priya Nair | Dubai, UAE |

### 10. Blog / Insights (2 cards)

- Eyebrow: "Insights & Thought Leadership"
- Section heading: **"Latest Articles"**
- Card 1: "Why Every Organization Needs a VMO" · April 7, 2026
- Card 2: "AI-Driven Transformation: Where to Start" · April 7, 2026
- Images: reuse Execution blog images as placeholders

### 11. Footer

- **About column:** Short Hippowize description · Social icons (LinkedIn, Twitter, Facebook, Instagram)
- **Services column:** Strategy Consulting · Digital Transformation · Professional Services · Training & Coaching
- **Regions column:** Toronto · Quebec · Western Canada · Africa · Middle East
- **Contact column:** info@hippowize.com · sales@hippowize.com · Toronto, Canada
- **Contact cards (3):** Email (`info@hippowize.com`) · Phone (placeholder) · Location (`Toronto, Canada`)
- **Copyright:** `© 2026 Hippowize Inc. All Rights Reserved.`

---

## Interactions & JS

All JS behavior identical to Execution recreation:
- Scroll > 20px → header gets `.scrolled` class (white bg, shadow, heading-colored text)
- Mobile menu toggle at ≤991px breakpoint
- Dark mode toggle with `localStorage` persistence (`hippowize-theme` key)
- Testimonial slider: prev/next arrows + dot navigation, CSS `transform: translateX`
- Back-to-top button appears on scroll

---

## Responsive Breakpoints

Identical to Execution:

| Breakpoint | Behavior |
|---|---|
| ≤1080px | Team → 2 columns, nav gaps reduced |
| ≤991px | Mobile nav drawer, all 2-col grids → 1 col, services → 2 col |
| ≤768px | Search hidden, services/team → 1 col, brand logos → 3 col |
| ≤568px | Hero reduced height, font sizes reduced, arrows hidden |
| ≤400px | Hero h1 further reduced |

---

## Out of Scope

- No CMS or backend
- No real form submission (contact uses mailto / Calendly link)
- No real team photos (placeholders until client provides)
- No real client logos (placeholders until client provides)
- No real blog (static cards only)
