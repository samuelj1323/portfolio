import React from "react";
import { createTheme } from "@mui/material";

export const ThemeContext = React.createContext();

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#F5EDDA",
          color: "#000000",
          border: "1px solid black",
          borderRadius: 15,
          fontSize: 17,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#000000", // Replace with your desired hover color
            color: "white",
            boxShadow: "none",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        contained: {
          borderRadius: 150,
        },
      },
    },
  },
  palette: {
    background: {
      default: "#F5EDDA",
      slightlyDarker: "#DDC8BA",
      white: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      fontFamily: "the-seasons",
    },
    primary: {
      main: "#a98274",
    },
  },
});

export default theme;
