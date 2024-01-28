import React from "react";

import HeaderBar from "./Components/HeaderBar";

import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Combined from "./Combined";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderBar />
      <Combined />
    </ThemeProvider>
  );
};

export default App;
