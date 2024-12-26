import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";

import { THEME } from "../../../shared/config/context/ThemeContext";
import { useTheme } from "../../../shared/lib";
import { classNames } from "../../../shared/lib";

import cls from "./ThemeSwitcher.module.css";

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div>
      <button
        className={classNames(cls.ThemeSwitcher, {}, [className as string])}
        onClick={toogleTheme}
      >
        {theme === THEME.LIGHT ? (
          <LightModeIcon />
        ) : (
          <Brightness4OutlinedIcon />
        )}
      </button>
    </div>
  );
};
