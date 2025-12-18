# CompileStrength Landing Page

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://compilestrength.com)

Official landing page for **CompileStrength** - AI-powered workout programming for engineers, developers, and tech professionals.

## Overview

CompileStrength is a science-based fitness platform that uses AI to generate personalized workout programs based on user data, goals, and physical constraints. This landing page serves as the marketing site and entry point to the main SaaS application.

**Live Site**: [https://compilestrength.com](https://compilestrength.com)

## Features

- **SEO-Optimized**: Comprehensive metadata, Open Graph tags, Twitter Cards, and JSON-LD structured data
- **Responsive Design**: Mobile-first design with dark mode support
- **Performance**: Built with Next.js 16 for optimal performance
- **Accessibility**: WCAG compliant with semantic HTML
- **Analytics**: Vercel Analytics integration

## Tech Stack

- **Framework**: Next.js 16.0.9 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Deployment**: Vercel

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

### Key Points:

- All source code, designs, and intellectual property are owned by Eliaz Bobadilla
- Users retain ownership of their personal workout data
- AI-generated workout programs are provided under the service license
- See full copyright details: [COPYRIGHT.md](../compilestrength/docs/legal/COPYRIGHT.md)

### Third-Party Licenses

This project uses open-source components under their respective licenses:
- Next.js (MIT)
- React (MIT)
- Tailwind CSS (MIT)
- Radix UI (MIT)
- Lucide Icons (ISC)

For complete third-party license information, see: [THIRD_PARTY_LICENSES.md](../compilestrength/docs/legal/THIRD_PARTY_LICENSES.md)

## Contact

- **Website**: [compilestrength.com](https://compilestrength.com)
- **Email**: eliaz@bobadilla.tech
- **GitHub**: [@bobadilla-tech](https://github.com/bobadilla-tech)
- **LinkedIn**: [CompileStrength](https://www.linkedin.com/company/compilestrength)
- **Twitter/X**: [@compilestrength](https://x.com/compilestrength)

## License

Proprietary - All rights reserved. This code is private and confidential.

For licensing inquiries, contact: eliaz@bobadilla.tech

---

**Last Updated**: December 18, 2025