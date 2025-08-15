import { createContext, useState, useEffect } from "react";

type theme = "light" | "dark";

interface HandleTheme {
  theme: theme;
  handelLightTheme: (theme: theme) => void;
  handelDarkTheme: (theme: theme) => void;
}

const initialState: HandleTheme = {
  theme: "light",
  handelLightTheme: () => {},
  handelDarkTheme: () => {}
};

export const ThemeContext = createContext<HandleTheme>(initialState);

export default function ThemeProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<theme>("light");

  function handelLightTheme(theme: theme) {
    if (theme === "light") {
      return;
    }
    setTheme("light");
  }
  function handelDarkTheme(theme: theme) {
    if (theme === "dark") {
      return;
    }
    setTheme("dark");
  }

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const ctx = {
    theme,
    handelLightTheme,
    handelDarkTheme
  };

  return <ThemeContext.Provider value={ctx}>{children}</ThemeContext.Provider>;
}
