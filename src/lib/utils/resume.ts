import type { Resume } from "./types";

/**
 * Mappable resume — source for `pages/resume`
 * Order matches PDF: Featured Project → Experience → Education
 * `tags` constrained to `FlatSkill` (`skills.ts:6`); `CompanyItem.experience` supports multiple tenures at same company.
 */
export const resume: Resume = [
  {
    type: "project",
    projectName: "FairShares — fairshares.app",
    date: new Date("2025-01-01"),
    points: [
      "Designed and built FairShares (fairshares.app), a full-stack AI-powered bill-splitting app powered by an OpenRouter-driven OCR pipeline and real-time WebSocket collaboration — used by 50+ people during beta testing to scan a receipt, split the bill, and settle up in under a minute.",
      "Sped up OCR processing by 4x and made serverless sessions resilient by moving job state into a stateful backend with cron-based resumption.",
      "Built the real-time collaboration layer on a Cloudflare Durable Object, letting everyone at the table claim items simultaneously and see the split update live as it happens.",
    ],
    tags: [
      "sveltekit",
      "svelte",
      "typescript",
      "tailwindcss",
      "drizzle",
      "postgres",
      "cloudflare workers",
      "d1",
      "serverless",
      "agentic workflows",
    ],
  },
  {
    type: "company",
    companyName: "JPMorgan Chase",
    experience: [
      {
        jobTitle: "Software Engineer 2",
        startDate: new Date("2025-01-01"),
        points: [
          "Improved page load performance by 3x on the Chase Fraud Application by optimizing critical CSS and standardizing resource loading across the application suite.",
          "Designed and implemented the Market Risk micro-frontend (MFE) production management architecture, now adopted across 10+ applications org-wide.",
          "Built and published a schema-based tool-registration package that exposes each MFE's form state as a discoverable, validated tool an internal LLM agent can call to read and fill data directly — letting the agent drive real UI flows instead of just generating text.",
          "Co-led the UI team through a critical migration to a new micro-frontend platform, coordinating deployment across frontend and backend systems for one of the team's first releases on the architecture.",
          "Reduced runtime defects and PR cycle time by introducing TypeScript-first standards across the UI codebase.",
          "Eliminated core flow failures tied to user state handling by standardizing state management and fixing frontend caching issues across backend, storage, and frontend layers.",
        ],
      },
      {
        jobTitle: "Software Engineer 1",
        startDate: new Date("2022-07-01"),
        endDate: new Date("2025-01-01"),
        points: [
          "Cut development time by 75% by leading front-end architecture improvements using Module Federation.",
          "Built performant, ADA-compliant core components for the Corporate Banking (CB) internal design system, used across 50+ applications.",
          "Mentored 3 engineering interns and led onboarding for multiple new engineers joining the team.",
        ],
      },
    ],
  },
  {
    type: "education",
    schoolName: "Texas A&M University",
    location: "College Station, TX",
    degree: "BS in Computer Science",
  },
];

/** Back-compat alias for earlier import path. */
export const resumeAug27 = resume;
