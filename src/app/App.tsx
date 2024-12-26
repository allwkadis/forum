import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames";
import { AppRouter } from "./providers/RouterProvider";

import "./styles/index.css";

function App() {
  const { theme } = useTheme();

  return (
    <>
      <div className={classNames("app", {}, [theme])}>
        <AppRouter />
      </div>
    </>
  );
}

export default App;
