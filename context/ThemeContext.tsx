import React, { createContext, useEffect, useState } from "react";

const enum Theme {
  Dark = "dark",
  Light = "light",
}

const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {},
});

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(Theme.Dark);
  const toggleTheme = () => {
    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
  };

  useEffect(() => {
    const oldTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
    document.documentElement.classList.remove(oldTheme);
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
};

export { ThemeContext, ThemeProvider };
