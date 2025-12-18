// Stub instrumentation file for Cloudflare Workers compatibility
// This prevents the "instrumentation hook" error in OpenNext/Cloudflare deployment

export async function register() {
  // No-op for Cloudflare Workers environment
  // Instrumentation features are not supported in edge runtime
}
