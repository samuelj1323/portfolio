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
  | "languages"
  | "tooling";

export type SkillsByCategory = Record<SkillCategory, readonly string[]>;
export type FlatSkill = SkillsByCategory[SkillCategory][number];
