import type { Route, Routes } from "$utils/types";

export const routes: Routes = ["/", "/about", "/resume"];

export const routeMappings: Record<Route, string> = {
  "/": "home",
  "/about": "about",
  "/resume": "resume",
} as const;
