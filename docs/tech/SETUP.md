# Setup Guide

## Environment Variables

Copy `.env.example` to `.env` and fill in the values below.

### Required

| Variable | Description |
|---|---|
| `DATABASE_URL` | Neon PostgreSQL connection string |
| `BETTER_AUTH_SECRET` | Auth secret (min 32 chars) |
| `BETTER_AUTH_URL` | Base URL (e.g. `https://compilestrength.com`) |
| `NEXT_PUBLIC_BETTER_AUTH_URL` | Public auth URL |
| `LEMONSQUEEZY_STORE_ID` | Your LemonSqueezy store ID |

### Optional

| Variable | Description |
|---|---|
| `GOOGLE_GENERATIVE_AI_API_KEY` | Gemini API key — enables AI workout compiler |
| `LEMONSQUEEZY_API_KEY` | Enables subscription billing |
| `LEMONSQUEEZY_WEBHOOK_SECRET` | Webhook signature verification |
| `LEMONSQUEEZY_WEBHOOK_URL` | Webhook URL for local dev |
| `NGROK_DOMAIN` | Your ngrok static domain for webhook testing |

### Minimal `.env` for local dev

```env
DATABASE_URL="postgresql://user:pass@host.neon.tech/neondb?sslmode=require"
BETTER_AUTH_SECRET="your-32-char-secret-here"
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:3000"
LEMONSQUEEZY_STORE_ID="your-store-id"
GOOGLE_GENERATIVE_AI_API_KEY="your-gemini-key"
```

---

## Database

```bash
bunx drizzle-kit push       # Push schema to database
bunx drizzle-kit studio     # Open Drizzle Studio GUI
bunx drizzle-kit generate   # Generate migrations
bunx drizzle-kit migrate    # Run migrations
bun run scripts/reset-db.ts # Reset database (DEV ONLY)
npx @better-auth/cli generate  # Regenerate auth schema
```

---

## Deployment (Cloudflare Workers)

### First deploy

1. Set public vars in `wrangler.jsonc` under `vars`:
   ```jsonc
   {
     "vars": {
       "BETTER_AUTH_URL": "https://compilestrength.com",
       "NEXT_PUBLIC_BETTER_AUTH_URL": "https://compilestrength.com"
     }
   }
   ```

2. Deploy:
   ```bash
   npm run deploy
   ```

3. Set secrets in Cloudflare (one-time, persists across deploys):
   ```bash
   echo "your-neon-url"     | npx wrangler secret put DATABASE_URL
   echo "your-auth-secret"  | npx wrangler secret put BETTER_AUTH_SECRET
   echo "your-gemini-key"   | npx wrangler secret put GOOGLE_GENERATIVE_AI_API_KEY
   ```

### Subsequent deploys

```bash
npm run deploy
```

### Preview locally with Cloudflare runtime

```bash
npm run preview
```

---

## Dev Commands Reference

```bash
bun dev                  # Start dev server
npm run build            # Production build
npm run check            # Build + TypeScript check
npm run biocheck         # Biome lint + format (auto-fix)
npm run lint             # ESLint
npm run cf-typegen       # Generate Cloudflare types
npm run ngrok            # Start ngrok tunnel for webhook testing
```
