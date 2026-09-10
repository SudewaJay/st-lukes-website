# St. Luke's Interaction Guidelines

How things move, respond and reveal on **stlukesmedilab.com**.

The site is a healthcare utility with an editorial voice. Interaction should
make it easier to find a price, a location or a phone number — never harder,
and never slower. A patient in a hurry should not have to wait for an animation
to finish.

---

## The test every interaction has to pass

Before adding motion, answer yes to at least one:

1. Does it improve **comprehension** — showing what changed and why?
2. Does it improve **navigation** — showing where you are or where you can go?
3. Does it improve **feedback** — confirming that the thing you pressed worked?
4. Does it improve **storytelling** — carrying a narrative the copy alone can't?

If the answer is no to all four, do not build it.

---

## Timing

| Interaction | Duration | Easing |
|---|---|---|
| Colour change | 150ms | `--ease-out` |
| Hover, focus, active | 250ms | `--ease-out` |
| Accordion, tab panel | 250ms | `--ease-out` |
| Scroll reveal | 500ms | `--ease-out` |
| Drawer, sheet | 350ms | `--ease-out` |

`--ease-out` is `cubic-bezier(0.22, 1, 0.36, 1)`: quick to start, settles
gently. Nothing on this site bounces, overshoots or springs.

Nothing exceeds 500ms. Anything over that reads as lag, not polish.

---

## States

### Buttons

- **Hover** — background deepens one step; an arrow icon (`.btn-arrow`) slides
  4px right.
- **Active** — `scale(0.98)`. Physical, immediate, no transition delay.
- **Focus** — 2px `brand-primary` ring, 2px offset, through `:focus-visible`.
- **Disabled** — 50% opacity, `pointer-events: none`.

### Links

Three treatments, used consistently:

- `.link-reveal` — an underline grows from left on hover. For links in prose.
- Arrow slide — 4px right. For navigational links with an arrow.
- Colour shift to `brand-primary-dark`. For links inside a hovered card.

Never combine all three on one link.

### Cards

- Image scales **1.03**. Not 1.1. The photograph should breathe, not lunge.
- Shadow deepens from `--shadow-sm` to `--shadow-lg`.
- Border warms toward `border-brand`.
- The card itself never moves or lifts on the Y axis.

### Inputs

Focus sets a 2px brand ring, warms the border to `brand-primary-dark`, and
lifts the background from `surface-soft` to `surface`. All three together, so
the focused field is unmistakable.

---

## Reveal on scroll

Sections fade up 18px as they enter the viewport, via the `Reveal` component.

**The critical rule: content must never be able to get stuck invisible.** The
old implementation rendered children at `opacity: 0` until JavaScript fired, so
a slow network or a script error left the page blank below the hero. The
current system has two independent guarantees:

1. **Nothing is hidden until the script runs.** The hiding rule is
   `html.js [data-reveal]:not([data-revealed])`, and only `RevealObserver` adds
   the `js` class. A page whose JavaScript fails, is blocked, or never arrives
   renders every section normally.
2. **A two-second safety timer reveals everything regardless** of what the
   observer reports. If `IntersectionObserver` misbehaves in a browser we have
   not tested, the worst case is a missing animation, never missing content.

Under reduced motion the `js` class is never added at all, so nothing is
hidden even momentarily.

Stagger delays stay at or below 0.25s. A visitor should never wait on a queue.

---

## Cursor-aware parallax

Used in exactly two places: the hero photograph and the closing call to action.

- Maximum travel: **7px** on each axis in the hero, 10px in the closing band.
- Disabled entirely on coarse pointers and under reduced motion.
- Driven by a CSS custom property written directly to the element, so React
  never re-renders on mouse move.

This should be something you feel rather than notice. If a visitor can describe
the effect, it is too strong.

---

## Tabbed explorers

Four sections use the same pattern: a list selects, a panel changes.

- Desktop: hover **and** focus both select, so keyboard and mouse behave alike.
- Touch: tap selects. Where a vertical rail is used on desktop, touch gets a
  horizontal scrolling chip row.
- The panel is keyed on the active item so it crossfades in with `.panel-in`.
- Only the content that changed animates. The frame stays put.
- The active item carries `aria-current`.

Sections using it: services explorer, technology showcase, why-St-Luke's, and
the locations explorer.

---

## Accordions

Built on `<details>`/`<summary>`, so they work with JavaScript disabled and are
announced correctly by screen readers. The plus icon rotates 45° to a cross
over 250ms.

**Never put information a patient needs behind an accordion alone.** Preparation
instructions, prices and opening hours are always in the document.

---

## Carousels

There is exactly one on the site — the health-camp gallery — and it is a
gallery of photographs, not a container for content people need. Anything that
must be compared (packages, analyzers, prices) is a grid.

The gallery is required to have:

- A visible **pause/play** control, not hover-only pause.
- Pause on `mouseenter` **and** on `focus`.
- Arrow-key navigation, with the container focusable.
- Swipe on touch.
- `role="group"`, `aria-roledescription="carousel"`, and a labelled region.
- An `aria-live="polite"` caption that announces the new slide.
- A thumbnail rail with `aria-current` on the active item.
- Every control at 44×44px minimum.
- Autoplay suspended entirely under reduced motion.

---

## Drawers and sheets

The test-detail drawer and the mobile menu share one behaviour:

- Bottom sheet on touch, side drawer from the right on desktop.
- `role="dialog"`, `aria-modal="true"`, and a label.
- Focus moves into the panel on open and returns to the trigger on close.
- Tab is trapped inside while open.
- Escape closes.
- Body scroll is locked, and the previous overflow value is restored — not
  blindly reset.
- The backdrop is a real `<button>`, so clicking outside closes it and screen
  readers get a labelled control.

---

## Mobile equivalents

Every desktop interaction has a defined touch counterpart. No exceptions.

| Desktop | Touch |
|---|---|
| Hover to select | Tap to select |
| Cursor parallax | Static |
| Vertical selector rail | Horizontal scrolling chips |
| Hover to reveal detail | Tap to expand in place |
| Sticky sidebar | Inline block in the flow |

**No essential information is ever hover-only.** In the hero trust rail, the
label alone is a complete statement; the expansion adds detail, it does not
supply the fact.

---

## Reduced motion

`prefers-reduced-motion: reduce` is honoured globally in `globals.css`:
animations and transitions collapse to 0.01ms, and smooth scrolling turns off.

On top of that, individually:

- Scroll reveals render at their resting state immediately.
- Cursor parallax does not initialise.
- Carousel autoplay does not start.
- The reading-progress bar is not mounted.
- Card image scaling is disabled.

Content is never hidden or delayed as a result.

---

## Page transitions

None. Navigation is instant. A 300ms fade between pages costs every visitor
300ms and buys nothing on a site whose job is answering "what does this test
cost".

---

## What this site does not do

- Scroll hijacking. The wheel always scrolls the page.
- Loading screens or splash animations.
- Animating every card in a grid.
- Elements that move more than 20px.
- 3D transforms, blur transitions, or parallax on more than two elements.
- Autoplaying anything that cannot be stopped.
- Hover states as the only route to information.
