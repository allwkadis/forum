import { AppRouter } from "./providers/RouterProvider";
import { classNames } from "../shared/lib";
import "../shared/config/i18n/i18n";
import { router } from "./providers/RouterProvider/config";
import { RouterProvider } from "react-router";

function App() {
  return (
    <div className={classNames("app", {}, [])}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
