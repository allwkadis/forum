import { RouterProvider } from "react-router";
import { router } from "../../../../shared/config/routeConfig";

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
