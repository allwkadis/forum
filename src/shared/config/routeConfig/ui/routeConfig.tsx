import { createBrowserRouter } from "react-router";
import { AboutPage } from "../../../../pages/AboutPage";
import { MainPage } from "../../../../pages/MainPage";
import { Layout } from "../../../ui/Layout";
import { IRoutes } from "../types";
import { Suspense } from "react";
import { NotFoundPage } from "../../../../pages/NotFountPage";
import { PageLoader } from "../../../../widgets/PageLoader/ui/PageLoader";
import { ErrorBoundary } from "../../../../app/providers/ErrorBoundary";
import { ProfilePage } from "../../../../pages/ProfilePage";

export enum APP_ROUTES {
  MAIN = "/main",
  ABOUT = "/about",
  PROFILE = "profile",
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
  {
    path: APP_ROUTES.PROFILE,
    element: <ProfilePage />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: APP_ROUTES.NOT_FOUND,
        element: (
          <ErrorBoundary>
            <NotFoundPage />
          </ErrorBoundary>
        ),
      },
      ...routes.map((route) => ({
        path: route.path,
        element: (
          <Suspense fallback={<PageLoader />}>
            <ErrorBoundary>{route.element}</ErrorBoundary>
          </Suspense>
        ),
      })),
    ],
  },
]);
