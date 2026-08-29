// Routing
export type Route = "/" | "/about" | "/blog" | "/resume";
export type Routes = readonly Route[];

// resume

// skills — curated grouped taxonomy (see constants.ts)
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

export type SkillsByCategory = Record<SkillCategory, readonly string[]>;
export type FlatSkill = SkillsByCategory[SkillCategory][number];

// projects — mappable portfolio data
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

export type ProjectStatus = "live" | "beta" | "wip" | "archived" | "demo" | "learning";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  highlights: readonly string[];
  category: ProjectCategory;
  featured: boolean;
  status: ProjectStatus;
  tech: readonly string[];
  path: string;
  links: {
    demo?: string;
    github?: string;
  };
  year?: string;
}

export type Projects = readonly Project[];
