# St. Luke's Design System

The design language for **stlukesmedilab.com**. Every token lives in
`src/app/globals.css`. Nothing in a component should hardcode a colour, a font
size or a shadow — if you need one that is not here, add it here first.

The system exists to make one thing true across every page: **this laboratory
tells you the truth about what things cost, and the interface behaves the same
way.** Precise, calm, local, human.

---

## 1. Colour

### Brand green

`#58B330` is the brand. It fails WCAG contrast as text on white (2.66:1), so it
is used for **fills, borders, icons and decoration only**. Text-carrying green
uses the darker steps.

| Token | Value | Use | On white |
|---|---|---|---|
| `brand-primary` | `#58B330` | Fills, borders, icons, accents, eyebrows on dark | 2.66:1 — never body text |
| `brand-primary-hover` | `#4DA029` | Hover on brand fills | — |
| `brand-primary-dark` | `#3F7D24` | **All green text**, links, active states | 5.4:1 ✅ |
| `brand-primary-darker` | `#2F5E1B` | Hover on green text, emphasis | 8.1:1 ✅ |
| `brand-primary-soft` | `#f4fbf0` | Tinted section backgrounds | — |

On the dark surface (`#0f172a`) the relationship inverts: `brand-primary`
reaches 7.6:1 and `brand-primary-dark` only 3.6:1. Use `.eyebrow-invert` for
eyebrows on dark, never the dark green.

### Brand red

| Token | Value | Use |
|---|---|---|
| `brand-red` | `#DC2626` | Reserved for genuine urgency and errors |
| `brand-red-hover` | `#B91C1C` | Hover |
| `brand-red-soft` | `#fef2f2` | Error backgrounds |

Red is **not** a general call-to-action colour here. Primary actions are green.
The original `#ff0000` was a browser default, not a brand colour, and is gone.

### Text, surfaces, borders

| Token | Value | Use |
|---|---|---|
| `text-primary` | `#0f172a` | Headlines, body emphasis |
| `text-secondary` | `#334155` | Body copy |
| `text-muted` | `#64748b` | Metadata, captions, labels — 4.8:1 minimum |
| `text-inverse` | `#ffffff` | On dark surfaces |
| `surface` | `#ffffff` | Default page surface |
| `surface-soft` | `#f8fafc` | Alternating band |
| `surface-dark` | `#0f172a` | Dark storytelling sections |
| `border` | `#e2e8f0` | Hairlines, dividers |
| `border-strong` | `#cbd5e1` | Hover borders |
| `border-brand` | `#d1e7c4` | Borders on brand-tinted surfaces |

**Never use `slate-*` or the legacy `stLukes-*` scales in new code.** They still
exist in the theme for compatibility; the semantic tokens above are the API.

### Section rhythm

Backgrounds alternate to give the page a pulse rather than one long white
scroll: `surface` → `surface-soft` → `brand-primary-soft` → `surface-dark`.
Never place two identical backgrounds next to each other.

---

## 2. Typography

**Display:** Barlow Condensed (`--font-display`) — editorial, condensed, lets a
headline run large without wrapping.
**Body:** Inter (`--font-sans`).

| Class | Size | Use |
|---|---|---|
| `.type-display` | clamp(2.6rem → 5.5rem) | Reserved for a single hero moment |
| `.type-h1` | clamp(2.4rem → 4.25rem) | Page title. One per page. |
| `.type-h2` | clamp(2rem → 3.1rem) | Section title |
| `.type-h3` | clamp(1.4rem → 1.85rem) | Card title, sub-section |
| `.type-h4` | 1.0625rem | Small card title — body face, not display |
| `.type-body-large` | 1.0625–1.15rem | Section lede |
| `.type-body` | 1rem | Default |
| `.type-body-small` | 0.875rem | Supporting |
| `.type-caption` | 0.75rem | Metadata |
| `.eyebrow` | 0.6875rem, 0.16em tracking, uppercase | Section label |
| `.eyebrow-invert` | same, brand green | Eyebrow on a dark surface |
| `.type-numeric` | body face, tabular | **All prices, counters, stats** |

**Numerals never use the condensed face.** Prices and statistics use
`.type-numeric` so digits align and stay legible at small sizes.

Condensed faces are already tight, so tracking stays near zero. Do not add
negative letter-spacing on top of the scale.

**An eyebrow is a `<p>`, never a heading.** The section title is the `<h2>`.
Card titles inside it are `<h3>`. The document outline must match the visual
hierarchy.

---

## 3. Spacing and layout

| Token | Value |
|---|---|
| `--space-1` … `--space-40` | 4px → 160px, on a 4px base |
| `--content-width` | 1200px |
| `--wide-width` | 1400px |
| `--text-measure` | 72ch |

- `.container-content` — the standard page gutter, 1200px max.
- `.container-wide` — full-bleed sections, 1400px max.
- `.section-padding` — 64px mobile, 80px tablet, 96px desktop.

Radii: `--radius-sm` 8px, `-md` 12px, `-lg` 18px, `-xl` 24px. Cards use
`rounded-2xl`, controls use `rounded-lg` or `rounded-xl`.

---

## 4. Buttons

| Class | Use | Appearance |
|---|---|---|
| `.btn .btn-primary` | The single most important action on a screen | Solid `brand-primary-dark`, white text |
| `.btn .btn-secondary` | The alternative path | White, hairline border |
| `.btn .btn-ghost` | Tertiary | Transparent, green text |
| `.btn .btn-danger` | Destructive only | Solid red |
| `.link-cta` | Standalone inline link acting as a CTA | Green, 44px hit area |

All buttons are `min-height: 48px`. `.link-cta` is 44px. Both clear the WCAG
2.5.8 target minimum without changing how the text looks.

**One primary button per view.** If two things look equally important, neither
is.

### CTA vocabulary

Use these exact phrases. Never "Learn more", "Click here" or "Submit".

| Intent | Label |
|---|---|
| Primary conversion | **Book a Home Visit** |
| Price discovery | **View Test Prices** |
| Voice contact | **Call 071 123 1954** |
| Messaging | **WhatsApp Us** |
| Location | **Find a Location** / **Get Directions** |

Phone display is always `071 123 1954`. `tel:` links are always
`+94711231954`. Never render `+94 71 123 1954`.

---

## 5. Cards and surfaces

- `.card-elevated` — white, hairline border, small shadow; shadow deepens and
  the border warms to brand on hover.
- `.card-flat` — soft background, hairline border, no shadow.
- `.media-frame` — image container that scales its image 1.03 on hover.

Depth comes from **layered surfaces and thin borders**, not large shadows. No
glassmorphism outside the two places where content genuinely sits over a
photograph (the hero address card and the gallery controls).

Equipment photographs are `object-contain` on a white frame. Two of the four
source files are square; cropping them to a common ratio removes the part of
the instrument a patient is looking at.

---

## 6. Motion

| Token | Value | Use |
|---|---|---|
| `--duration-micro` | 150ms | Colour changes |
| `--duration-interaction` | 250ms | Hover, focus, accordion, tab |
| `--duration-reveal` | 500ms | Scroll reveal |
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Nearly everything |

Full rules in [INTERACTION_GUIDELINES.md](./INTERACTION_GUIDELINES.md).

---

## 7. Forms

Every input needs a real `<label>` (visible or `sr-only`), a visible focus ring,
and a state for loading, error and success. The site has no form that collects
data and does nothing — if you add one, wire it up or leave it out.

Focus: `2px` solid `brand-primary` with `2px` offset, applied through
`:focus-visible`. Never `outline: none` without a stronger replacement.

---

## 8. Breakpoints

| Name | Width | Notes |
|---|---|---|
| base | 320–639 | Design here first. Test 320, 375, 390, 430. |
| `sm` | 640 | Two-column grids begin |
| `md` | 768 | Tablet, side-by-side sections |
| `lg` | 1024 | Desktop nav appears, sidebars, hover interactions |
| `xl` | 1280 | Four-column grids |

Mobile is a design, not a squeeze. Where a desktop layout uses a vertical rail,
mobile uses a horizontal chip row. Where desktop reveals on hover, mobile
reveals on tap.

---

## 9. Images

- Always `next/image` with an accurate `sizes`.
- Decorative images take `alt=""`. Meaningful ones describe what is in them,
  not what they are ("St. Luke's laboratory in Ja-Ela", not "hero image").
- Cloudinary images go through `CldImage`, which requests `f_auto,q_auto` at the
  width actually needed.
- Never request a width the source file does not have. The hero photograph is
  1349px wide and should be re-exported at 2560px before it is trusted at
  full-bleed on a retina desktop.

---

## 10. Evidence rules

These are not style rules but they constrain the design, so they live here.

- **Never publish a rating, review count, doctor count or certification** that
  the project data cannot substantiate. `aggregateRating` stays out of the
  schema until there are 10+ verifiable reviews, and it must not appear as
  visible text either.
- Trust indicators state facts drawn from the data files: the number of towns
  in `lib/locations.ts`, the number of tests in `lib/priceList.ts`, the stated
  24-hour turnaround, home collection.
- If a certification is confirmed later, build an evidence component that names
  the issuing body, the certificate number and the expiry — not a badge.
