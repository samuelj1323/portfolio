import React from "react";
import LandingPage from "./Pages/LandingPage";
import ThemeProvider from "./Context/ThemeProvider/ThemeProvider";
const App = () => {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
};

export default App;
