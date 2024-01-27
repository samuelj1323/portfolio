import React from "react";
import LandingPage from "./Pages/LandingPage";
import HeaderBar from "./Components/HeaderBar";
import AboutPage from "./Pages/AboutPage";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import BackgroundPage from "./Pages/BackgroundPage";
import ProjectsPage from "./Pages/Projects";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderBar />
      <LandingPage />
      <AboutPage />
      <BackgroundPage />
      <ProjectsPage />
    </ThemeProvider>
  );
};

export default App;
