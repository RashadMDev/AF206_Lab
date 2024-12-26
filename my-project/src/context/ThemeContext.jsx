/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = useState("light");

      const toggleTheme = () => {
            setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
      };

      useEffect(() => {
            document.body.className = theme === "light" ? "" : "dark";
      }, [theme]);

      return (
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                  {children}
            </ThemeContext.Provider>
      );
}

export { ThemeContext }