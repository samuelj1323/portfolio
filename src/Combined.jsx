import React from "react";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import BackgroundPage from "./Pages/BackgroundPage";
import ProjectsPage from "./Pages/Projects";
import ContactPage from "./Pages/ContactPage";
const Combined = () => {
  return (
    <div style={{ flex: 1, minWidth: "100%" }}>
      <LandingPage />
      <AboutPage />
      <BackgroundPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
};
export default Combined;
