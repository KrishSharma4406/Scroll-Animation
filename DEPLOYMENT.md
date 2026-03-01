# Deployment Guide

## Option 1: GitHub Pages

### Step 1: Configure Next.js for Static Export
Update `next.config.ts`:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

### Step 2: Build the Project
```bash
npm run build
```

### Step 3: Deploy to GitHub Pages
1. Create a new repository on GitHub
2. Initialize git in your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

3. Create a `gh-pages` branch with the build output:
   ```bash
   npm install -g gh-pages
   gh-pages -d out
   ```

4. Enable GitHub Pages in repository settings (Settings > Pages > Source: gh-pages branch)

## Option 2: Vercel (Recommended - Easiest)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

That's it! Vercel automatically detects Next.js and configures everything.

## Option 3: Netlify

### Step 1: Build Settings
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 2: Deploy
1. Push code to GitHub
2. Go to https://netlify.com
3. Click "Add new site" > "Import an existing project"
4. Connect to GitHub and select your repository
5. Deploy

## Testing Locally Before Deploy

```bash
# Build for production
npm run build

# Test the production build
npm start
```

Visit http://localhost:3000 to verify everything works correctly.

## Important Notes

- Make sure all dependencies are installed: `npm install`
- For GitHub Pages, you may need to update the `basePath` in `next.config.ts`
- Vercel is recommended as it has zero-configuration for Next.js
- The site will be live at: `https://your-username.github.io/repo-name/` (GitHub Pages) or a Vercel URL

## Custom Domain (Optional)

### Vercel:
1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain

### GitHub Pages:
1. Go to repository Settings > Pages
2. Add your custom domain under "Custom domain"
3. Configure DNS records as instructed

## Performance Checklist

Before deploying, ensure:
- [x] All animations are smooth
- [x] Images are optimized
- [x] No console errors
- [x] Responsive on all devices
- [x] Fast load times (< 3 seconds)

## Troubleshooting

**Build fails?**
- Run `npm install` to ensure all dependencies are present
- Check for any TypeScript errors: `npm run lint`

**Animations not working?**
- Ensure GSAP is installed: `npm install gsap`
- Check browser console for JavaScript errors

**Page looks broken?**
- Clear browser cache
- Check if all CSS files are loaded
- Verify Tailwind CSS is properly configured

## Live Demo URL
After deployment, your site will be available at:
- Vercel: `https://your-project.vercel.app`
- GitHub Pages: `https://your-username.github.io/scroll-hero-animation`
- Netlify: `https://your-project.netlify.app`
