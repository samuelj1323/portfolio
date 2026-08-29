import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "$components/nav-bar/nav-bar";

const HomePage = lazy(() => import("./home"));

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<h2>about</h2>} />
          <Route path="/blog" element={<h2>blog</h2>} />
          <Route path="/resume" element={<h2>resume</h2>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
