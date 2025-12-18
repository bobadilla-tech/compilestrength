# CompileStrength Engineers Landing Page - Configuration & Fixes

## Project Overview

This is the landing page for CompileStrength, deployed at `engineers.compilestrength.com`. It's a Next.js 16 application using the App Router, deployed to Cloudflare Pages using OpenNext with the Cloudflare adapter.

**Main app domain**: `compilestrength.com`
**Landing page domain**: `engineers.compilestrength.com`

## Tech Stack

- **Framework**: Next.js 15.5.9 (App Router) - Using v15 for Cloudflare compatibility
- **React**: 18.3.1 (Next.js 15 requires React 18)
- **Deployment**: Cloudflare Pages with OpenNext Cloudflare adapter
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS 4.x
- **UI Components**: Radix UI
- **TypeScript**: 5.x

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
name = "compilestrength-engineers-landing"
compatibility_date = "2024-12-18"
compatibility_flags = ["nodejs_compat", "global_fetch_strictly_public"]
main = ".open-next/worker.js"

upload_source_maps = true

[observability]
enabled = true
```

**Key fields**:

- `name`: Worker name - must match Cloudflare Pages project name
- `compatibility_flags`:
  - `nodejs_compat`: **CRITICAL** - Enables Node.js built-in modules (fs, crypto, path, stream, async_hooks, http, https, buffer, util, vm, url, zlib)
  - `global_fetch_strictly_public`: Ensures fetch API works correctly in Cloudflare Workers
- `main`: Entry point to the OpenNext-generated worker script
- `observability.enabled`: Enables logging for debugging
- `upload_source_maps`: Uploads source maps for better error debugging

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
- `next: 15.5.9` - Next.js framework (v15 for Cloudflare compatibility)
- `react: 18.3.1` - React library (v18 required by Next.js 15)
- `react-dom: 18.3.1` - React DOM library
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
compatibility_flags = ["nodejs_compat", "global_fetch_strictly_public"]
```

**Why**: Cloudflare Workers runtime doesn't include Node.js modules by default. The `nodejs_compat` flag enables Node.js built-in module support required by Next.js server-side code. The `global_fetch_strictly_public` flag ensures fetch API works correctly.

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

---

### Error 4: "Server failed to respond" in production

**Symptom**:

```json
{
  "message": "Server failed to respond.",
  "details": {}
}
```

**Cause**: Runtime error in Cloudflare Worker, often due to:
1. Missing `nodejs_compat` or `global_fetch_strictly_public` flags
2. Missing observability logs configuration
3. Async/streaming compatibility issues with Next.js

**Fix**: Update wrangler.toml:

```toml
compatibility_flags = ["nodejs_compat", "global_fetch_strictly_public"]

[observability]
enabled = true

upload_source_maps = true
```

**Why**:
- `nodejs_compat` provides Node.js built-in module support needed by Next.js
- `global_fetch_strictly_public` ensures fetch API works correctly in Workers
- Observability logs help debug runtime errors
- Source maps provide better error stack traces
- Check Cloudflare Pages deployment logs for specific error details

**Debugging**:
1. Check Cloudflare Pages deployment logs in dashboard
2. Look for JavaScript runtime errors in worker execution
3. Verify all environment variables are set
4. Test locally with `npx opennextjs-cloudflare preview`

---

### Error 5: "An error occurred while loading the instrumentation hook"

**Symptom**:

```
NextJS request failed. Error: An error occurred while loading the instrumentation hook
Failed to prepare server Error: An error occurred while loading the instrumentation hook
```

**Cause**: Next.js 13+ includes instrumentation hooks feature that's not fully compatible with Cloudflare Workers/OpenNext environment. Next.js expects an instrumentation file but it's not properly handled in the edge runtime.

**Fix**: Create a stub `instrumentation.ts` file in the project root:

```typescript
// instrumentation.ts
export async function register() {
  // No-op for Cloudflare Workers environment
  // Instrumentation features are not supported in edge runtime
}
```

Also update `next.config.mjs`:

```javascript
const nextConfig = {
  // ... other config
  experimental: {
    instrumentationHook: false,
  },
}
```

**Why**: The stub file satisfies Next.js's instrumentation loader without actually implementing any instrumentation (which isn't supported in Cloudflare Workers).

**Note**: In Next.js 15, instrumentation.ts is available by default and the `experimental.instrumentationHook` config option was removed. The stub file is still needed for Cloudflare Workers compatibility.

---

### Error 6: Next.js 16 Compatibility Issues with Cloudflare

**Symptom**: Various runtime errors, instrumentation hook failures, or build/deployment issues with Next.js 16

**Cause**: Next.js 16 (released December 2024) has compatibility issues with Cloudflare Workers and OpenNext. The framework introduced changes that aren't fully supported in the edge runtime environment yet.

**Fix**: Downgrade to Next.js 15.5.9 (latest stable v15):

```bash
pnpm remove next react react-dom @types/react @types/react-dom
pnpm add next@15.5.9 react@^18 react-dom@^18
pnpm add -D @types/react@^18 @types/react-dom@^18
```

**Why**:
- Next.js 16 requires React 19 which has compatibility issues with some edge runtimes
- Next.js 15 is the recommended version for Cloudflare Workers deployments
- Next.js 15 requires React 18 (not React 19)
- OpenNext has been thoroughly tested with Next.js 15

**Important**: Always use Next.js 15.x for Cloudflare Pages deployments until OpenNext officially supports Next.js 16.

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
├── instrumentation.ts      # Stub for Cloudflare Workers compatibility
├── wrangler.toml           # Cloudflare Workers config
├── open-next.config.ts     # OpenNext configuration
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies
└── CLAUDE.md               # This file
```

## Known Warnings (Non-blocking)

1. **Next.js version available**: Build logs may show "16.x is available"
   - **DO NOT UPGRADE** - Next.js 16 is not compatible with Cloudflare Workers yet
   - Stay on Next.js 15.5.9 for production stability

2. **React version available**: Package manager may suggest React 19
   - **DO NOT UPGRADE** - Next.js 15 requires React 18
   - Stay on React 18.3.1

3. **ESLint config in next.config.mjs**: Deprecated
   - Move ESLint config to `.eslintrc.json` if needed
   - Currently set to `ignoreDuringBuilds: true`

4. **Vaul peer dependency warnings**: Expects React ^16.8 || ^17.0 || ^18.0, found 18.3.1
   - Safe to ignore - React 18.3.1 is compatible
   - Warning is due to peer dependency range specification

## Troubleshooting Checklist

If deployment fails:

1. ✅ Check `wrangler.toml` has `main = ".open-next/worker.js"`
2. ✅ Check `wrangler.toml` has `compatibility_flags = ["nodejs_compat", "global_fetch_strictly_public"]`
3. ✅ Check build command is `npx opennextjs-cloudflare build`
4. ✅ Check build output directory is `.open-next`
5. ✅ Verify OpenNext build succeeds: Look for "Worker saved in `.open-next/worker.js` 🚀"
6. ✅ Check for Node.js module resolution errors in wrangler deploy logs
7. ✅ Ensure `@opennextjs/cloudflare` is in dependencies (not devDependencies)
8. ✅ Verify using Next.js 15.x (NOT 16.x) and React 18.x (NOT 19.x)

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
