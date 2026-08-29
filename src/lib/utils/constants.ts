import type { Route, Routes } from "$utils/types";

export const routes: Routes = ["/", "/about", "/blog", "/resume"];

export const routeMappings: Record<Route, string> = {
  "/": "home",
  "/about": "about",
  "/blog": "blog",
  "/resume": "resume",
} as const;
