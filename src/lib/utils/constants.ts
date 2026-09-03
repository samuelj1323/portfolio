import type { Route, Routes } from "$utils/types";

export const routes: Routes = ["/", "/about", "/resume"];

export const routeMappings: Record<Route, string> = {
  "/": "Home",
  "/about": "About",
  "/resume": "Resume",
} as const;
