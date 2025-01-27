import { AppRouter } from "./providers/RouterProvider";
import { classNames } from "../shared/lib";
import "../shared/config/i18n/i18n";

function App() {
  return (
    <div className={classNames("app", {}, [])}>
      <AppRouter />
    </div>
  );
}

export default App;
