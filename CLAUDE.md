# CompileStrength Engineers Landing Page - Configuration & Fixes

## Project Overview

This is the landing page for CompileStrength, deployed at `engineers.compilestrength.com`. It's a Next.js 16 application using the App Router, deployed to Cloudflare Pages using OpenNext with the Cloudflare adapter.

**Main app domain**: `compilestrength.com`
**Landing page domain**: `engineers.compilestrength.com`

## Tech Stack

- **Framework**: Next.js 16.0.10 (App Router, Turbopack)
- **Deployment**: Cloudflare Pages with OpenNext Cloudflare adapter
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS 4.x
- **UI Components**: Radix UI
- **TypeScript**: 5.0.2 (should upgrade to 5.1.0+)

## Deployment Configuration

### Cloudflare Pages Settings

**Build command**:

```bash
npx opennextjs-cloudflare build
```

**Build output directory**:

```
.open-next
```

**Auto-deploy**: Connected to GitHub repository for automatic deployments on push

### Critical Configuration Files

#### 1. wrangler.toml

**Location**: `/wrangler.toml`

```toml
name = "compilestrength-landing"
compatibility_date = "2024-12-18"
compatibility_flags = ["nodejs_compat"]
main = ".open-next/worker.js"
```

**Key fields**:

- `name`: Worker name (may be overridden by Cloudflare Pages to match project name)
- `compatibility_flags = ["nodejs_compat"]`: **CRITICAL** - Required for Node.js built-in modules (fs, crypto, path, stream, async_hooks, http, https, buffer, util, vm, url, zlib)
- `main`: Entry point to the OpenNext-generated worker script

#### 2. open-next.config.ts

**Location**: `/open-next.config.ts`

```typescript
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // R2 cache is available but not currently enabled
  // incrementalCache: r2IncrementalCache,
});
```

#### 3. package.json

**Key dependencies**:

- `@opennextjs/cloudflare: 1.3.0` - Cloudflare adapter for Next.js
- `next: 16.0.10` - Next.js framework
- `wrangler: 4.56.0` - Cloudflare Workers CLI

**Scripts**:

```json
{
  "dev": "next dev",
  "build": "next build",
  "deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy",
  "preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview"
}
```

**Note**: Vercel Analytics (`@vercel/analytics`) is in package.json but not used in code.

## Common Deployment Errors & Fixes

### Error 1: "Missing entry-point to Worker script"

**Symptom**:

```
✘ [ERROR] Missing entry-point to Worker script or to assets directory
```

**Cause**: `wrangler.toml` missing the `main` field

**Fix**: Add to wrangler.toml:

```toml
main = ".open-next/worker.js"
```

**Why**: OpenNext generates the worker at `.open-next/worker.js`, but wrangler needs to know where to find it.

---

### Error 2: "Could not resolve [node module]" (fs, crypto, path, etc.)

**Symptom**:

```
✘ [ERROR] Could not resolve "async_hooks"
✘ [ERROR] Could not resolve "fs"
✘ [ERROR] Could not resolve "crypto"
[... 8+ more similar errors]
```

**Cause**: Missing `nodejs_compat` compatibility flag

**Fix**: Add to wrangler.toml:

```toml
compatibility_flags = ["nodejs_compat"]
```

**Why**: Cloudflare Workers runtime doesn't include Node.js modules by default. The `nodejs_compat` flag enables Node.js built-in module support required by Next.js server-side code.

---

### Error 3: "Error: invalid command, expected 'build' | 'preview' | 'deploy'"

**Symptom**:

```
Error: invalid command, expected 'build' | 'preview' | 'deploy'
```

**Cause**: Build command was `npx opennextjs-cloudflare` without subcommand

**Fix**: Update build command to:

```bash
npx opennextjs-cloudflare build
```

## SEO Configuration

### Metadata & URLs

**Base URL**: `https://engineers.compilestrength.com`

**Target audience**: Engineers, developers, tech professionals who want science-based AI workout programming

**Key SEO keywords**:

- AI workout programming
- workout app for engineers
- fitness for developers
- science-based training
- strength training for programmers
- AI fitness coach
- personalized workout plans
- data-driven fitness

### Important SEO Files

#### 1. app/layout.tsx

Comprehensive metadata configuration:

- Title template with brand name
- Meta description optimized for target audience
- 13+ relevant keywords
- Open Graph tags for social sharing
- Twitter Card configuration
- JSON-LD structured data (WebApplication + Organization schemas)
- Proper favicon configuration

#### 2. app/sitemap.ts

**Location**: `/app/sitemap.ts`

Generates XML sitemap with proper URLs:

- Landing page: `https://engineers.compilestrength.com` (priority 1.0)
- Signup: `https://compilestrength.com/signup` (priority 0.9)
- Login: `https://compilestrength.com/login` (priority 0.8)
- Blog: `https://compilestrength.com/blog` (priority 0.7)
- Privacy/Terms: `https://compilestrength.com/privacy` and `/terms` (priority 0.3)

**Accessible at**: `https://engineers.compilestrength.com/sitemap.xml`

#### 3. public/robots.txt

**Location**: `/public/robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://engineers.compilestrength.com/sitemap.xml
Crawl-delay: 1
```

### Submitting to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `engineers.compilestrength.com`
3. Verify ownership (DNS, HTML file, or meta tag)
4. Submit sitemap URL: `https://engineers.compilestrength.com/sitemap.xml`
5. Request indexing for main pages

## Brand & Content Guidelines

### Company Information

- **Company**: Eliaz Bobadilla / Bobadilla Tech
- **Product**: CompileStrength™
- **Tagline**: "Science-based AI workout programming for engineers"
- **LinkedIn**: https://www.linkedin.com/company/compilestrength/
- **GitHub**: https://github.com/bobadilla-tech

### Team Members (Social Proof)

1. **Eliaz Bobadilla** - Software Engineer & Competitive Powerlifter

   - Photo: `/public/eliaz.jpeg`

2. **Leonardo Estacio** - Full Stack Engineer & Hobbyist Weightlifter

   - Photo: `/public/leonardo.jpeg`

3. **Carlos Bonifacio** - Full Stack Engineer & Bodybuilder
   - Photo: Not available (displays initials)

## File Structure

```
compilestrength-engineers-landing/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page
│   ├── sitemap.ts          # Dynamic sitemap generation
│   └── globals.css         # Global styles
├── components/
│   ├── header.tsx          # Navigation (links to main app)
│   ├── hero.tsx            # Hero section (version badge removed)
│   ├── features.tsx        # Feature highlights
│   ├── pricing.tsx         # Pricing tiers
│   ├── social-proof.tsx    # Testimonials (real team members)
│   ├── footer.tsx          # Footer (no Twitter, legal links)
│   └── ui/                 # Shadcn/Radix UI components
├── public/
│   ├── robots.txt          # SEO crawler config
│   ├── site.webmanifest    # PWA manifest
│   ├── favicon.ico         # Favicon
│   ├── eliaz.jpeg          # Team photo
│   └── leonardo.jpeg       # Team photo
├── wrangler.toml           # Cloudflare Workers config
├── open-next.config.ts     # OpenNext configuration
├── package.json            # Dependencies
└── CLAUDE.md               # This file
```

## Known Warnings (Non-blocking)

1. **TypeScript version**: 5.0.2 below recommended 5.1.0

   - Not a deployment blocker
   - Consider upgrading to 5.1.0+

2. **ESLint config in next.config.mjs**: Deprecated

   - Move ESLint config to `.eslintrc.json`

3. **TURBOPACK define warning**: Suspicious assignment

   - Warning from Next.js internals, not our code
   - Safe to ignore

4. **Worker name mismatch**:
   - Config uses "compilestrength-landing"
   - Cloudflare Pages expects "compilestrength-engineers-landing"
   - Cloudflare auto-corrects this, not an issue

## Troubleshooting Checklist

If deployment fails:

1. ✅ Check `wrangler.toml` has `main = ".open-next/worker.js"`
2. ✅ Check `wrangler.toml` has `compatibility_flags = ["nodejs_compat"]`
3. ✅ Check build command is `npx opennextjs-cloudflare build`
4. ✅ Check build output directory is `.open-next`
5. ✅ Verify OpenNext build succeeds: Look for "Worker saved in `.open-next/worker.js` 🚀"
6. ✅ Check for Node.js module resolution errors in wrangler deploy logs
7. ✅ Ensure `@opennextjs/cloudflare` is in dependencies (not devDependencies)

## Development Workflow

### Local Development

```bash
pnpm install
pnpm dev
```

Access at: `http://localhost:3000`

### Local Build Test

```bash
pnpm build
```

### Preview OpenNext Build

```bash
npx opennextjs-cloudflare build
npx opennextjs-cloudflare preview
```

### Deploy via CLI (Optional)

```bash
npx opennextjs-cloudflare build
npx opennextjs-cloudflare deploy
```

**Note**: Auto-deploy from GitHub is preferred for production.

## Migration Notes

### From Vercel to Cloudflare Pages

**Why**: Vercel doesn't support private repos in organizations on free tier

**Changes made**:

1. Added `@opennextjs/cloudflare` dependency
2. Created `wrangler.toml` configuration
3. Created `open-next.config.ts` configuration
4. Updated build commands from `next build` to `opennextjs-cloudflare build`
5. Removed Vercel Analytics from code
6. Updated all URLs from `compilestrength.com` to `engineers.compilestrength.com` for landing page

### URL Structure

- Landing page and static content: `engineers.compilestrength.com`
- App functionality (signup, login, blog): `compilestrength.com`
- Legal pages (privacy, terms): Link to `compilestrength.com` versions

## Future Improvements

1. **Enable R2 caching**: Uncomment `incrementalCache` in `open-next.config.ts`
2. **Upgrade TypeScript**: Update to 5.1.0+ for better compatibility
3. **Remove Vercel Analytics**: Delete from package.json if confirmed unused
4. **Add monitoring**: Consider Cloudflare Analytics or similar
5. **Performance optimization**: Investigate static asset caching strategies
6. **Legal pages**: Consider if landing page needs its own privacy/terms copies

## Support & Resources

- **OpenNext Cloudflare Docs**: https://opennext.js.org/cloudflare
- **Cloudflare Pages Docs**: https://developers.cloudflare.com/pages
- **Next.js Docs**: https://nextjs.org/docs
- **Wrangler Docs**: https://developers.cloudflare.com/workers/wrangler

## Contact

For issues with this landing page, contact the CompileStrength team at Bobadilla Tech.
