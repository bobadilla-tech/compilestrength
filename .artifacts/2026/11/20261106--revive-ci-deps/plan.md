# Revive CI, bump deps, restore deployable state

Date: 2026-11-06. Work resumed on the app after a pause.

## Findings

- CI failed at `bun install --frozen-lockfile` in both apps: Dependabot bumped
  `next` in `package.json` without a matching `bun.lock` (PR #68 refreshed them).
- `src/proxy.ts` is referenced in docs but never existed. Auth is enforced by
  `requireAuth()` in `src/app/app/layout.tsx` and `src/lib/auth-middleware.ts`
  helpers in API routes.
- Cloudflare Workers Builds check ("Workers Builds: compilestrength") fails on
  PRs. Logs are only in the Cloudflare dashboard. After the monorepo move the
  build's *root directory* must be `apps/web` (and `apps/engineers-landing` for
  the landing worker). Verify in dashboard → Workers → Settings → Build.

## Changes

- All deps bumped to latest (`bun update --latest`) in both apps.
  - `ai` v7: `convertToModelMessages` is async, awaited at both call sites.
  - `lucide-react` v1 removed brand icons: landing footer uses inline SVGs.
  - TypeScript: web pinned to `~6.0.3` because `typescript-eslint` does not
    support TS 7 yet (landing runs TS 7).
  - `vite` added explicitly so `@vitejs/plugin-react` 6 resolves under vitest 5.
  - Biome config migrated to 2.6.x; ESLint ignores build output (was OOMing on
    `.open-next`), new strict React rules downgraded to warnings.
  - `overrides.glob` clears a high advisory pulled in by `@opennextjs/cloudflare`.
- CI rewritten (`.github/workflows/ci.yml`): path-filtered web/landing jobs,
  Biome, ESLint, tsc, vitest+coverage, `next build`, OpenNext (Workers) build,
  dependency audit, single required `CI Success` gate.

## Follow-ups

- Clean up the ESLint warnings (react-hooks purity/refs/set-state-in-effect, `any`).
- Decide whether to add a CD workflow (deploy from `main` after CI) instead of
  relying on Cloudflare Workers Builds git integration.
- biasmarket uses a NestJS API; this app has none (Next.js route handlers on
  Workers + Neon). Not migrated.
