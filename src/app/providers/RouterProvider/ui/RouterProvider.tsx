import { RouterProvider } from "react-router";
import { router } from "../config";

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
