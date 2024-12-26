import { useTheme } from "../../../app/providers/ThemeProvider";

export const Header = () => {
  const { toogleTheme } = useTheme();

  return (
    <header>
      fdsfds
      <button onClick={toogleTheme}>switch theme</button>
    </header>
  );
};
