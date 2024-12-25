import { useMemo, useState } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  THEME,
  ThemeContext,
} from "../lib/ThemeContext";

interface IThemeProviderProps {
  children?: React.ReactNode;
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME) ?? THEME.LIGHT;

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<THEME>(defaultTheme);

  const defaultContextValue = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
