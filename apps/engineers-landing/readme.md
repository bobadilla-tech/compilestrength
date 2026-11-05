# CompileStrength Landing Page


CompileStrength is a science-based fitness platform that uses AI to generate personalized workout programs based on user data, goals, and physical constraints. This landing page serves as the marketing site and entry point to the main SaaS application.

**Live Site**: [https://engineers.compilestrength.com](https://engineers.compilestrength.com)

## Features

- **SEO-Optimized**: Comprehensive metadata, Open Graph tags, Twitter Cards, and JSON-LD structured data
- **Responsive Design**: Mobile-first design with dark mode support
- **Performance**: Built with Next.js 16 for optimal performance
- **Accessibility**: WCAG compliant with semantic HTML
- **Analytics**: Ready for Cloudflare Web Analytics

## Tech Stack

- **Framework**: Next.js 16.0.9 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages (with OpenNext Cloudflare adapter)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Homepage
│   └── sitemap.ts          # Dynamic sitemap generation
├── components/
│   ├── header.tsx          # Navigation header
│   ├── hero.tsx            # Hero section
│   ├── features.tsx        # Features showcase
│   ├── how-it-works.tsx    # Process explanation
│   ├── social-proof.tsx    # Testimonials
│   ├── pricing.tsx         # Pricing tiers
│   └── footer.tsx          # Footer with links
├── public/
│   ├── robots.txt          # SEO crawler configuration
│   ├── site.webmanifest    # PWA manifest
│   └── [icons/images]      # Favicons and assets
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## Deployment

This project is configured for **Cloudflare Pages** deployment.

### Deploy to Cloudflare Pages

#### Option 1: Cloudflare Dashboard (Recommended)

1. **Connect Repository**:
   - Go to [Cloudflare Pages](https://dash.cloudflare.com/pages)
   - Click "Create a project" → "Connect to Git"
   - Authorize and select your GitHub organization
   - Choose the `compilestrength-engineers-landing` repository

2. **Configure Build Settings**:
   ```
   Framework preset: Next.js
   Build command: npx opennextjs-cloudflare build
   Build output directory: .worker-next/worker
   Root directory: /
   Node.js version: 18
   Environment variables: (none required for landing page)
   ```

   **Important**: The build command runs both `build` and `deploy` steps automatically.

3. **Deploy**:
   - Click "Save and Deploy"
   - First deployment takes 2-3 minutes
   - Subsequent deployments are faster

4. **Custom Domain**:
   - Go to project → "Custom domains"
   - Add `compilestrength.com`
   - Cloudflare will automatically configure DNS

#### Option 2: CLI Deployment

```bash
# Install dependencies
npm install

# Build and deploy to Cloudflare
npm run deploy

# Or preview locally
npm run preview
```

### Environment Variables

No environment variables are required for the landing page. If needed in the future:

```bash
# Set via Wrangler CLI
wrangler pages secret put VARIABLE_NAME

# Or via Cloudflare Dashboard:
# Project → Settings → Environment Variables
```

### Build Output

The build creates static assets optimized for Cloudflare's edge network:
- **Output directory**: `.worker-next`
- **Adapter**: `@opennextjs/cloudflare` converts Next.js to Cloudflare Workers
- **Edge runtime**: Runs on Cloudflare's V8 Workers globally

### Continuous Deployment

Cloudflare Pages automatically deploys:
- ✅ **Production**: Pushes to `main` branch
- ✅ **Preview**: Pull requests (generates preview URLs)
- ✅ **Rollback**: One-click rollback to any previous deployment

### Why Cloudflare Pages?

- ✅ **Private Repos**: Full support for GitHub organization private repositories (unlike Vercel free tier)
- ✅ **Global CDN**: 300+ edge locations worldwide
- ✅ **Zero Config SSL**: Automatic HTTPS with Cloudflare SSL
- ✅ **Fast Builds**: Typically 1-2 minutes
- ✅ **Generous Free Tier**: 500 builds/month, unlimited bandwidth
- ✅ **Preview Deployments**: Automatic preview URLs for PRs

## SEO Features

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph protocol
- ✅ Twitter Card markup
- ✅ JSON-LD structured data (WebApplication, Organization)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Web manifest

  
