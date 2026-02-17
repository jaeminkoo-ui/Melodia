---
description: How to deploy the Melodia website to production
---

# Melodia Deployment

Melodia is a static HTML/CSS site hosted on **Vercel**, connected to the GitHub repo `jaeminkoo-ui/Melodia` (branch: `master`).

## Deployment Steps

// turbo-all

1. Stage all changes:
```bash
cd /Users/jaeminkoo/Workspace/Melodia && git add -A
```

2. Commit with a descriptive message:
```bash
git commit -m "your commit message here"
```

3. Push to master — Vercel auto-deploys on push:
```bash
git push origin master
```

4. Vercel builds and deploys automatically in ~1-2 minutes.

## Key Info

- **Domain**: melodiamusic.org
- **Hosting**: Vercel (auto-deploy on push to `master`)
- **Repo**: https://github.com/jaeminkoo-ui/Melodia
- **Branch**: `master`
- **CSS Cache Busting**: Update `?v=N` in all HTML files when making CSS changes (currently `v=4`)

## Notes

- No build step needed — it's a static site (HTML/CSS/JS only)
- After pushing, wait 1-2 min then verify on melodiamusic.org
- Always test on actual mobile device, not just browser resize (breakpoints can behave differently)
