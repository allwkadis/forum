import { createBrowserRouter } from "react-router";
import { AboutPage } from "../../../../pages/AboutPage";
import { MainPage } from "../../../../pages/MainPage";
import { Layout } from "../../../ui/Layout";
import { IRoutes } from "../types";
import { Suspense } from "react";
import { NotFoundPage } from "../../../../pages/NotFountPage";
import { PageLoader } from "../../../../widgets/PageLoader/ui/PageLoader";

export enum APP_ROUTES {
  MAIN = "/main",
  ABOUT = "/about",
  NOT_FOUND = "*",
}

const routes: IRoutes[] = [
  {
    path: APP_ROUTES.ABOUT,
    element: <AboutPage />,
  },
  {
    path: APP_ROUTES.MAIN,
    element: <MainPage />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: APP_ROUTES.NOT_FOUND,
        element: <NotFoundPage />,
      },
      ...routes.map((route) => ({
        path: route.path,
        element: <Suspense fallback={<PageLoader />}>{route.element}</Suspense>,
      })),
    ],
  },
]);
