import React, { useState } from "react";

export const ThemeContext = React.createContext();

export const themes = {
  colors: {
    primaryDark: "#393D3F",
    primaryLight: "#FDFDFF",
    secondary: "#62929E",
    tertiary: "#546A7B",
    accent: "#F7D002",
  },
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
