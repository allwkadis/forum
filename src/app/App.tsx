import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames";

import "./styles/index.css";

function App() {
  const { theme, toogleTheme } = useTheme(); //управление темой

  return (
    <>
      <div
        className={classNames("app", { hovered: true, backdrop: false }, [
          theme,
          "aboba",
        ])}
      >
        <button onClick={toogleTheme}>switch theme</button>
        <p>aboba</p>
        <p>APPLE</p>
      </div>
    </>
  );
}

export default App;
