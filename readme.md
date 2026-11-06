> **Monorepo layout:** the main app lives in `apps/web` and the marketing site in `apps/engineers-landing`. Paths like `src/...` below are relative to `apps/web`. Run commands from inside the app directory.

<p align="center">
  <a href="https://compilestrength.com" target="_blank">
    <img src="public/logo.png" alt="CompileStrength" width="260" />
  </a>
</p>

# CompileStrength

[![Docs](https://img.shields.io/badge/Docs-docs/tech-blue)](./docs/tech/ONBOARDING.md)

## What's CompileStrength?

A full-stack fitness app with an AI-powered workout compiler for science-based lifters. Users chat with a bodybuilding agent that generates personalized programs, tracks sessions, and adapts over time.

Runs at the edge on Cloudflare Workers with zero cold starts.

## Stack

- **Framework** — Next.js 16 App Router
- **Deployment** — Cloudflare Workers via [OpenNext.js](https://opennext.js.org/)
- **Database** — Neon PostgreSQL (serverless) + Drizzle ORM
- **Auth** — Better Auth Cloudflare (email/password, geolocation)
- **Billing** — LemonSqueezy (subscriptions, webhooks, usage limits)
- **AI** — Vercel AI SDK + Google Gemini
- **Styling** — Tailwind CSS v4
- **Language** — TypeScript throughout

## Development

```bash
bun install
bun dev         # Next.js dev server
npm run deploy  # Deploy to Cloudflare Workers
```

Copy `.env.example` to `.env` and fill in your values. See [`docs/tech/SETUP.md`](./docs/tech/SETUP.md) for the full environment and deployment guide.

## Docs

- [`docs/tech/ONBOARDING.md`](./docs/tech/ONBOARDING.md) — new developer setup
- [`docs/tech/SETUP.md`](./docs/tech/SETUP.md) — environment variables & deployment
- [`docs/tech/STYLE_GUIDE.md`](./docs/tech/STYLE_GUIDE.md) — design system & brand
- [`docs/tech/LEMONSQUEEZY_SETUP.md`](./docs/tech/LEMONSQUEEZY_SETUP.md) — billing integration
- [`docs/tech/NGROK_SETUP.md`](./docs/tech/NGROK_SETUP.md) — local webhook testing
- [`CLAUDE.md`](./CLAUDE.md) — architecture, conventions, and contributor guidelines
