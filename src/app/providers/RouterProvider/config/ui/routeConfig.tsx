import { createBrowserRouter } from "react-router";
import { AboutPage } from "../../../../../pages/AboutPage";
import { MainPage } from "../../../../../pages/MainPage";
import { ProfilePage } from "../../../../../pages/ProfilePage";
import { IRoutes } from "../types/types";
import { ErrorBoundary } from "../../../ErrorBoundary";
import { NotFoundPage } from "../../../../../pages/NotFountPage";
import { Suspense } from "react";
import { PageLoader } from "../../../../../widgets/PageLoader/ui/PageLoader";
import { RequiredAuth } from "../..";
import { Layout } from "../../../../../shared/ui/Layout";

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
];

const protecredRoutes: IRoutes[] = [
  {
    path: PROTECRED_ROUTES.PROFILE,
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
      ...protecredRoutes.map((route) => ({
        path: route.path,
        element: (
          <RequiredAuth>
            <Suspense fallback={<PageLoader />}>
              <ErrorBoundary>{route.element}</ErrorBoundary>
            </Suspense>
          </RequiredAuth>
        ),
      })),
    ],
  },
]);
