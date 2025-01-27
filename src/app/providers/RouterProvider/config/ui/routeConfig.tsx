import { createBrowserRouter } from "react-router";
import { AboutPage } from "../../../../../pages/AboutPage";
import { MainPage } from "../../../../../pages/MainPage";
import { ProfilePage } from "../../../../../pages/ProfilePage";
import { IRoutes } from "../types/types";
import { ErrorBoundary } from "../../../ErrorBoundary";
import { NotFoundPage } from "../../../../../pages/NotFountPage";
import { Suspense } from "react";
import { PageLoader } from "../../../../../widgets/PageLoader/ui/PageLoader";
import { Layout } from "../../../../../shared/ui/Layout";
import { RequiredAuth } from "../..";

export enum APP_ROUTES {
  MAIN = "/main",
  ABOUT = "/about",
  NOT_FOUND = "*",
}

export enum PROTECRED_ROUTES {
  PROFILE = "profile",
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
    path: PROTECRED_ROUTES.PROFILE,
    element: <ProfilePage />,
  },
];

//поменять архитектуру

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
      {
        path: "/main",
        element: (
          <Suspense fallback={<PageLoader />}>
            <ErrorBoundary>
              <MainPage />
            </ErrorBoundary>
          </Suspense>
        ),
      },
      ...routes.map((route) => ({
        path: route.path,
        element: (
          <Suspense fallback={<PageLoader />}>
            <ErrorBoundary>
              <RequiredAuth>{route.element}</RequiredAuth>
            </ErrorBoundary>
          </Suspense>
        ),
      })),
    ],
  },
]);
