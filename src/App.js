import React from "react";
import LandingPage from "./Pages/LandingPage";
import HeaderBar from "./Components/HeaderBar";
import AboutPage from "./Pages/AboutPage";
import ThemeProvider from "./Context/ThemeProvider/ThemeProvider";
const App = () => {
  return (
    <ThemeProvider>
      <LandingPage />
      <AboutPage />
    </ThemeProvider>
  );
};

export default App;
