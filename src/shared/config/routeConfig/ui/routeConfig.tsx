import { createBrowserRouter } from "react-router";
import { AboutPage } from "../../../../pages/AboutPage";
import { MainPage } from "../../../../pages/MainPage";
import { Layout } from "../../../ui/Layout";
import { IRoutes } from "../types";


enum AppRoutes {
  MAIN = "/main",
  ABOUT = "/about",
}

const routes: IRoutes[] = [
  {
    path: AppRoutes.ABOUT,
    element: <AboutPage />,
  },
  {
    path: AppRoutes.MAIN,
    element: <MainPage />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      ...routes.map((route) => ({
        path: route.path,
        element: route.element,
        children: route.children
      })),
    ],
  },
]);
