import { createContext } from "react";

export enum THEME {
  LIGHT = "app_light_theme",
  DARK = "app_dark_theme",
}

export interface IThemeContextProps {
  theme?: THEME;
  setTheme?: (theme: THEME) => void;
}

export const LOCAL_STORAGE_THEME_KEY = "theme";
export const ThemeContext = createContext<IThemeContextProps>({});
