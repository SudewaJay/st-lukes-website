# Performance Tracking Plan

## Current measurement status (18 Oct 2026)

| Source | Status | Notes |
|---|---|---|
| Google Search Console | Verified for the domain (per `CLAUDE.md`); **not connected to this workspace** | Baseline below must be pulled manually |
| Analytics (GA4 / Vercel) | **Not installed** | `data-track` attributes exist (phone_click, whatsapp_click, package_book) but nothing records them |
| Google Business Profile insights | Not accessed | Calls / direction requests from GBP |

**No metrics are reported in this cycle because none were available. Nothing here is estimated.**

## Step 0 — record the baseline before publishing (owner)

In Search Console → Performance → Search results, last 28 days and last 3 months, record:

| Metric | Site total | `/blog/*` only | Date pulled |
|---|---|---|---|
| Impressions | | | |
| Clicks | | | |
| CTR | | | |
| Average position | | | |

Also export the top 50 queries (filter for "fast", "urine", "ufr", "kidney", "creatinine", "uric", "report") and Indexing → Pages (indexed / not indexed counts).

## Step 1 — enable conversion measurement (needs owner approval)

Recommended: GA4 via `@next/third-parties` `GoogleAnalytics` (or Vercel Analytics custom events), plus a small client listener that sends an event for any click on `[data-track]` using the attribute value. Events: `phone_click`, `whatsapp_click`, `package_book`, plus directions-link clicks. Update `/privacy-policy` before enabling. No patient or medical data is collected by these events.

## Review schedule

| When | Check | Decide |
|---|---|---|
| Publication day | Build output contains the post; live URL 200; canonical, og:image, JSON-LD (Rich Results Test / Schema validator); sitemap includes URL; Request indexing | Fix any technical error before next article |
| ~7 days | URL Inspection: indexed? Any coverage warning? | Re-request indexing; check internal links were added |
| ~28 days | Per-article impressions, clicks, CTR, position, top queries | Rewrite `seoTitle`/`seoDescription` where impressions are high but CTR is low |
| ~60 days | Query match vs intended keyword; position 8–20 queries | Add sections/FAQs answering real queries; add internal links from strongest pages |
| ~90 days | Organic landings → test-page visits → phone/WhatsApp events | Decide next cycle's topics; update or merge under-performers |

## Per-article tracking table (fill in)

| Article | Indexed (date) | 28-day impr. / clicks | 60-day | 90-day | Contact events from article | Action taken |
|---|---|---|---|---|---|---|
| 01 Fasting | | | | | | |
| 02 UFR | | | | | | |
| 03 Kidney | | | | | | |
| 04 Uric acid | | | | | | |
| 05 Lab report | | | | | | |

No ranking, traffic or AI-answer inclusion is promised; decisions are made from these real numbers.
