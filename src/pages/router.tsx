import { lazy, Suspense, type LazyExoticComponent, type JSX } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "$components/nav-bar/nav-bar";
import { routes } from "$utils/constants";
import type { Route as AppRoute } from "$utils/types";

const HomePage = lazy(() => import("./home"));
const AboutPage = lazy(() => import("./about"));
const ResumePage = lazy(() => import("./resume"));

const RouteHash: Partial<
  Record<AppRoute, LazyExoticComponent<() => JSX.Element>>
> = {
  "/": HomePage,
  "/about": AboutPage,
  "/resume": ResumePage,
};

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Suspense fallback={<div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh", fontSize: "0.875rem", opacity: 0.6 }}>Loading...</div>}>
        <Routes>
          {routes.map((route: AppRoute) => {
            const El = RouteHash[route];
            if (!El) return null;
            return <Route key={route} path={route} element={<El />} />;
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
