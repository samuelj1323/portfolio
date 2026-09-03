// ── Routing ──
/** Discrete portfolio routes; add new paths here and in `constants.ts:3` `routes`. */
export type Route = "/" | "/about" | "/resume";
/** Readonly tuple of allowed routes — used with `as const satisfies Routes`. */
export type Routes = readonly Route[];

// ── Skills — curated grouped taxonomy (source of truth: `constants.ts:15` `skills`) ──
export type SkillCategory =
  | "frontend"
  | "backend"
  | "data"
  | "infra"
  | "ai"
  | "accessibility"
  | "soft"
  | "languages"
  | "tooling";

/** Category → readonly skill list; `as const satisfies` preserves literal narrowing. */
export type SkillsByCategory = Record<SkillCategory, readonly string[]>;
/** Union of every individual skill string (e.g. "react" | "drizzle" | ...). */
export type FlatSkill = SkillsByCategory[SkillCategory][number];

// ── Projects — mappable portfolio data (`projects.ts:7` `projects`) ──
/** High-level bucket for filtering (UI tabs, `projectsByCategory`). */
export type ProjectCategory =
  | "fullstack"
  | "frontend"
  | "backend"
  | "ai"
  | "harness"
  | "mobile"
  | "games"
  | "infra"
  | "learning";

/** Lifecycle state badge (filters, status chips). */
export type ProjectStatus =
  "live" | "beta" | "wip" | "archived" | "demo" | "learning";

/** Single mappable project — mirrors `constants.ts` pattern with `as const satisfies Projects`. */
export interface Project {
  /** Stable key (kebab-case, used as React key + anchor). */
  id: string;
  /** URL-safe slug. */
  slug: string;
  /** Display title. */
  title: string;
  /** One-line pitch for cards. */
  description: string;
  /** Optional expanded pitch for detail views. */
  longDescription?: string;
  /** 2–4 bullet highlights for callouts. */
  highlights: readonly string[];
  /** Filter bucket. */
  category: ProjectCategory;
  /** Hero treatment (`featuredProjects`). Keep 3–5. */
  featured: boolean;
  /** Lifecycle badge. */
  status: ProjectStatus;
  /** Tech chips — freeform but prefer `flatSkills` vocab where possible. */
  tech: readonly string[];
  /** Repo-relative path for local reference. */
  path: string;
  /** External links; both optional to support private/wip. */
  links: {
    demo?: string;
    github?: string;
  };
  /** Release/beta year string. */
  year?: string;
}

/** Readonly tuple of projects — use `as const satisfies Projects`. */
export type Projects = readonly Project[];

// ── Resume — mappable experience → bullet points ──
/** Discriminated union of all resume blocks; map with type guards. */
export type ResumeItem = CompanyItem | EducationItem | ProjectItem;
/** Ordered resume — render `Resume.map` in `constants.ts` (or future `resume.ts`). */
export type Resume = ResumeItem[];

/** Standalone featured project (e.g. FairShares hero). */
export type ProjectItem = {
  type: "project";
  /** Project display name. */
  projectName: string;
  /** Featured date/beta window. */
  date: Date;
  /** 2–5 impact bullets. */
  points: string[];
  /** Skill tags — constrained to known `FlatSkill` values for consistency. */
  tags: FlatSkill[];
};

/** Education block (Texas A&M → BS CS). */
export type EducationItem = {
  type: "education";
  /** Institution. */
  schoolName: string;
  /** City, State. */
  location: string;
  /** Degree shorthand. */
  degree: "BS in Computer Science";
};

/** Employment block (JPMorgan Chase). */
export type CompanyItem = {
  type: "company";
  /** Employer. */
  companyName: string;

  /** For the job related experiences */
  experience: Array<{
    /** Role title. */
    jobTitle: string;
    /** Inclusive start. */
    startDate: Date;
    /** Undefined = present. */
    endDate?: Date;
    /** Impact bullets for the tenure. */
    points: string[];
  }>;
};
