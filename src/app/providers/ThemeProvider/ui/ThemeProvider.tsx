import { useLayoutEffect, useMemo, useState } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  THEME,
  ThemeContext,
} from "../../../../shared/config/context/ThemeContext";
import { useAppDispatch } from "../../StoreProvider";
import { userSlice } from "../../../../entities/User";

interface IThemeProviderProps {
  children?: React.ReactNode;
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME) ?? THEME.LIGHT;

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<THEME>(defaultTheme);
  const dispatch = useAppDispatch();
  const defaultContextValue = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );

  useLayoutEffect(() => {
    document.body.className = theme;
    dispatch(userSlice.actions.intitAuthData());
  }, []);

  return (
    <ThemeContext.Provider value={defaultContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
