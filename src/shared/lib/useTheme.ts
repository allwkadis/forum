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
    let newTheme: THEME;
    switch (theme) {
      case THEME.DARK:
        newTheme = THEME.LIGHT;
        break;
      case THEME.LIGHT:
        newTheme = THEME.PURPLE;
        break;
      case THEME.PURPLE:
        newTheme = THEME.DARK;
        break;
      default:
        newTheme = THEME.DARK;
    }
    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || THEME.DARK, toogleTheme };
};
