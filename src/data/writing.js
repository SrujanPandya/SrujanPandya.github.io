import generatedPosts from './generated/substackPosts.json';

// Enhancement: this file is generated/updated by scripts/sync-substack.mjs before production builds.
// The committed JSON is a safe fallback, so an offline build still has known-good writing links.
export const writingPosts = generatedPosts;
