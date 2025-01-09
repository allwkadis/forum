import { AppRouter } from "./providers/RouterProvider";
import { useTheme } from "../shared/lib";
import { classNames } from "../shared/lib";

import "../shared/config/i18n/i18n";
import { StoreProvider } from "./providers/StoreProvider";

// import "./styles/index.css";

function App() {
  // const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [])}>
        <AppRouter />
    </div>
  );
}

export default App;
