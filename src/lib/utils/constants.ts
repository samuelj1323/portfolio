import type { Route, Routes } from "$utils/types";

export const routes = [
  "/",
  "/about",
  "/blog",
  "/resume",
] as const satisfies Routes;

export const routeMappings: Record<Route, string> = {
  "/": "home",
  "/about": "about",
  "/blog": "blog",
  "/resume": "resume",
} as const;
