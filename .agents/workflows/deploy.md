---
description: How to deploy the Melodia website to production
---

# Deploy Melodia to Production

The Melodia website is hosted on **Vercel** and auto-deploys from GitHub.

## Deployment Steps

// turbo-all

1. Check git status for uncommitted changes
```bash
git status
```

2. Stage all changed files
```bash
git add .
```

3. Commit with a descriptive message
```bash
git commit -m "description of changes"
```

4. Push to GitHub (triggers Vercel auto-deploy)
```bash
git push origin master
```

## Configuration

- **GitHub**: `jaeminkoo-ui/Melodia` (branch: `master`)
- **Vercel**: Auto-deploy on push to `master`
- **Git User**: Jaemin Koo (`jaeminkoo@gmail.com`)
