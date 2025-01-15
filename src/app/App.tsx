import { AppRouter } from "./providers/RouterProvider";
import { classNames } from "../shared/lib";
import "../shared/config/i18n/i18n";

function App() {
  // const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [])}>
      <AppRouter />
    </div>
  );
}

export default App;
