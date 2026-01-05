# Deployment Guide

## Quick Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio-react.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

## Alternative Deployment Options

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure redirects for SPA routing

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload the contents of the `out` folder to your web server

## Environment Variables

If you add any environment variables, make sure to configure them in your deployment platform:

- `NEXT_PUBLIC_SITE_URL` - Your site URL
- `NEXT_PUBLIC_CONTACT_EMAIL` - Contact email for forms

## Custom Domain

After deployment, you can add a custom domain in your hosting platform's settings.

## Performance Optimization

The project is already optimized with:
- ✅ Next.js Image optimization
- ✅ Automatic code splitting
- ✅ CSS optimization
- ✅ Font optimization
- ✅ Static generation where possible