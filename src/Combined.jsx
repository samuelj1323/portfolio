import React from "react";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import BackgroundPage from "./Pages/BackgroundPage";
import ProjectsPage from "./Pages/Projects";
import ContactPage from "./Pages/ContactPage";
import { Routes, Route } from "react-router-dom";
const Combined = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/background" element={<BackgroundPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};
export default Combined;
