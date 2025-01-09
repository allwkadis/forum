import { useContext } from "react";

import {
  THEME,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
} from "../config/context/ThemeContext";

interface IUseTheme {
  toogleTheme: () => void;
  theme: THEME;
}

export const useTheme = (): IUseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toogleTheme = () => {
    const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toogleTheme };
};
