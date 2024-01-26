import React, { useState } from "react";

export const ThemeContext = React.createContext();

export const themes = {
  colors: {
    primaryDark: "#000000",
    primaryLight: "#FFFFFF",
    secondary: "#62929E",
    tertiary: "#546A7B",
    accent: "#FF9900",
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
