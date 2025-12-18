# CompileStrength Landing Page

[![Deployed on Cloudflare](https://img.shields.io/badge/Deployed%20on-Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://engineers.compilestrength.com)

Official landing page for **CompileStrength** - AI-powered workout programming for engineers, developers, and tech professionals.

## Overview

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

This project is configured for **Cloudflare Pages** deployment (supports private GitHub repos in organizations).

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
   Build output directory: .worker-next
   Root directory: /
   Node.js version: 18
   Environment variables: (none required for landing page)
   ```

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

## Related Projects

This landing page is part of the CompileStrength SaaS ecosystem:

- **Main Application**: [compilestrength-web](https://github.com/bobadilla-tech/compilestrength) - Full-featured workout programming platform
- **API**: Backend services for AI workout generation
- **Blog**: Content marketing and SEO

## Legal & Copyright

**Copyright © 2025 Eliaz Bobadilla. All Rights Reserved.**

CompileStrength™ is a trademark of Eliaz Bobadilla. This project is developed under the "Bobadilla Tech" brand (GitHub organization) but is wholly owned by Eliaz Bobadilla as an individual.

### Key Points

- All source code, designs, and intellectual property are owned by Eliaz Bobadilla
- This is the marketing landing page for the CompileStrength SaaS platform
- Full legal documentation available at the main application

### Third-Party Licenses

This landing page uses open-source components under their respective licenses:
- Next.js (MIT)
- React (MIT)
- Tailwind CSS (MIT)
- Radix UI (MIT)
- Lucide Icons (ISC)

## Contact

- **Website**: [compilestrength.com](https://engineers.compilestrength.com)
- **Email**: eliaz@bobadilla.tech
- **GitHub**: [@bobadilla-tech](https://github.com/bobadilla-tech)
- **LinkedIn**: [CompileStrength](https://www.linkedin.com/company/compilestrength)

## License

Proprietary - All rights reserved. This code is private and confidential.

For licensing inquiries, contact: eliaz@bobadilla.tech

---

**Last Updated**: December 18, 2025