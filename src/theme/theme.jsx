import React from "react";
import { createTheme } from "@mui/material";

export const ThemeContext = React.createContext();

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: "#000000",
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
    MuiTypography: {
      styleOverrides: {
        fontSize: "32px",
      },
    },
  },
  palette: {
    background: {
      default: "#3B3B3B",
      white: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF",
    },
    primary: {
      main: "#FFFFFF",
    },
  },
});

export default theme;
