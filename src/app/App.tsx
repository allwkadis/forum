import { AppRouter } from "./providers/RouterProvider";
import { useTheme } from "../shared/lib";
import { classNames } from "../shared/lib";

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
