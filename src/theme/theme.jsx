import React from "react";
import { createTheme } from "@mui/material";

export const ThemeContext = React.createContext();

const theme = createTheme({
  palette: {
    background: {
      default: "#000000",
    },
    text: {
      primary: "#FFFFFF",
      fontFamily: "the-seasons",
    },
    primary: {
      main: "#a98274",
    },
  },
});

export default theme;
