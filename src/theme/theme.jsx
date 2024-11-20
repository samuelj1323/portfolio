import React from "react";
import { createTheme } from "@mui/material";

export const ThemeContext = React.createContext();

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: "black",
          fontSize: 17,
          backgroundColor: "#FFD700",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#FFD700", // Replace with your desired hover color
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
      darkerDefault: "#313131",
      white: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF",
      accent: "#FFD700",
    },
    primary: {
      main: "#FFFFFF",
    },
  },
});

export default theme;
