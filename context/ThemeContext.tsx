import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  FunctionComponent,
} from "react";

const enum Theme {
  Dark = "dark",
  Light = "light",
}

type Children = {
  children: ReactNode;
};

const browserThemePreference = () => {
  if (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return Theme.Dark;
  } else {
    return Theme.Light;
  }
};

const isThemeLocalStorageEmpty = () => {
  return localStorage.getItem("theme") == null;
};

const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {},
});

const ThemeProvider: FunctionComponent<Children> = ({ children }) => {
  const [theme, setTheme] = useState(Theme.Light);
  const toggleTheme = () => {
    const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const initialTheme = () => {
    if (isThemeLocalStorageEmpty()) {
      const theme = browserThemePreference();
      localStorage.setItem("theme", theme);
      setTheme(theme);
    } else {
      const theme = localStorage.getItem("theme")!;
      setTheme(theme as Theme);
    }
  };

  useEffect(initialTheme, []);

  useEffect(() => {
    const oldTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
    document!.querySelector("body")!.classList.remove(oldTheme);
    document!.querySelector("body")!.classList.add(theme);
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export { ThemeContext, ThemeProvider };
