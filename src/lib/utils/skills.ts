import type { SkillsByCategory } from "$utils/types";

// Curated grouped skills — evidence from /code audit (75 package.json scanned)
// Typos fixed: microservie -> microservice, postgress -> postgres
// Keep aws (S3 in instaweb), keep web performance + architectures (proven via structure/fair-share workspaces)
export const skills = {
  frontend: [
    "react",
    "typescript",
    "svelte",
    "sveltekit",
    "vue",
    "next.js",
    "astro",
    "tailwindcss",
    "tanstack start",
    "tanstack router",
    "html",
    "css",
    "web performance",
    "microfrontend architecture",
  ],
  backend: [
    "node",
    "hono",
    "express",
    "trpc",
    "nitro",
    "socket.io",
    "fastapi",
    "deno",
    "better-auth",
    "java",
    "spring",
    "microservice architecture",
  ],
  data: [
    "drizzle",
    "prisma",
    "postgres",
    "sqlite",
    "libsql",
    "redis",
    "supabase",
    "d1",
  ],
  infra: [
    "cloudflare workers",
    "wrangler",
    "docker",
    "vercel",
    "aws",
    "serverless",
  ],
  ai: [
    "agentic workflows",
    "harness creation",
    "skill orchestration",
    "serverless ai workflows",
    "whisper fine-tuning",
    "whisperkit / coreml",
    "on-device inference",
    "opencode",
    "claude code",
    "cursor",
    "vs code",
    "mcp",
  ],
  accessibility: [
    "ADA champion",
    "WCAG / a11y",
    "inclusive design",
    "semantic html",
    "keyboard navigation",
    "screen reader testing",
  ],
  soft: [
    "collaboration",
    "cross-functional communication",
    "working with non-technical stakeholders",
    "teaching & mentorship",
    "technical writing & docs",
    "team leadership",
  ],
  languages: ["python", "swift", "sql", "gdscript", "java"],
  tooling: ["git", "pnpm", "vite", "vitest", "biome", "oxlint"],
} as const satisfies SkillsByCategory;

// Flat list for simple iteration / backwards compat
export const flatSkills = (
  Object.values(skills) as unknown as string[][]
).flat() as unknown as readonly string[];

// Optional extended niche skills (proven but hidden from primary UI to avoid noise)
// Enable if targeting ML/mobile/games roles: pytorch, whisper, diffusers, expo, react native, electron, three.js, godot
export const extendedSkills = [
  "pytorch",
  "hugging face",
  "whisper",
  "diffusers",
  "expo",
  "react native",
  "capacitor",
  "electron",
  "three.js",
  "remotion",
  "solidjs",
  "framer motion",
  "radix ui",
  "zustand",
  "pinia",
] as const;
