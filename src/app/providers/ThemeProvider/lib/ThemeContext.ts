import { createContext } from "react";

export enum THEME {
  LIGHT = "light",
  DARK = "dark",
}

export interface IThemeContextProps {
  theme: THEME;
  setTheme: (theme: THEME) => void;
}

export const LOCAL_STORAGE_THEME_KEY = "theme";
export const ThemeContext = createContext<IThemeContextProps>({});
