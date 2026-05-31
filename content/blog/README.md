# Writing a new blog post

Every file in this folder ending in `.mdx` becomes a live blog post.

## Quick start (using GitHub web)

1. Go to https://github.com/SudewaJay/st-lukes-website/tree/main/content/blog
2. Click **Add file → Create new file**
3. Name it `your-post-slug.mdx` (the slug becomes the URL: `/blog/your-post-slug`)
4. Paste the template below
5. Click **Commit changes** — Vercel auto-deploys in ~30 seconds

## Template

```mdx
---
title: "Your post title here"
excerpt: "One or two sentences that show up on the blog index card."
category: "Health Tips"   # or Cardiology, Patient Guide, etc.
date: "2026-03-01"        # ISO YYYY-MM-DD — drives sorting
author: "Dr. L. Perera"
image: "https://images.unsplash.com/photo-XXXXXXXXXXXX?auto=format&fit=crop&w=1400&q=80"
# draft: true             # uncomment to keep it off the live site
---

Write your post in Markdown.

## Subheadings work

- Bullet lists
- **bold**, *italic*, `code`
- [Links](/price-list)

| Tables | also |
|---|---|
| work | great |
```

## Images

Two options:

- **Unsplash** (recommended for now): browse https://unsplash.com, click any photo, right-click → Copy image address, paste into the `image:` field
- **Your own**: drop the file in `public/blog/your-photo.jpg`, then use `image: "/blog/your-photo.jpg"`

Recommended size: at least 1200×675 (16:9). Unsplash URLs automatically resize when you append `?auto=format&fit=crop&w=1400&q=80`.

## Drafts

Add `draft: true` to the frontmatter to keep a post out of production. Drafts still appear on `npm run dev` so you can preview them locally.

## What you don't have to do

- No need to edit the blog index page — it picks up new posts automatically
- No need to edit the sitemap — it picks up new posts automatically
- No build commands — pushing to `main` triggers Vercel
