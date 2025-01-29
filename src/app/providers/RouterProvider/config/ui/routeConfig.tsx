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
import { ArticlePage } from "../../../../../pages/ArticlesPage";
import { ArticleDetailsPage } from "../../../../../pages/ArticleDetailsPage";

export enum PUBLIC_ROUTES {
  MAIN = "/main",
  ABOUT = "/about",
  NOT_FOUND = "*",
}

export enum PROTECRED_ROUTES {
  PROFILE = "/profile",
  ARTICLES = "/articles",
  ARTICLE_DETAILS = "/article_details/:id",
}

const privateRoutes: IRoutes[] = [
  {
    path: PROTECRED_ROUTES.PROFILE,
    element: <ProfilePage />,
  },
  {
    path: PROTECRED_ROUTES.ARTICLES,
    element: <ArticlePage />,
  },
  {
    path: PROTECRED_ROUTES.ARTICLE_DETAILS,
    element: <ArticleDetailsPage />,
  },
];

const publicRoutes: IRoutes[] = [
  {
    path: PUBLIC_ROUTES.ABOUT,
    element: <AboutPage />,
  },
  {
    path: PUBLIC_ROUTES.MAIN,
    element: <MainPage />,
  },
];

//поменять архитектуру

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: PUBLIC_ROUTES.NOT_FOUND,
        element: (
          <ErrorBoundary>
            <NotFoundPage />
          </ErrorBoundary>
        ),
      },
      ...publicRoutes.map((route) => ({
        path: route.path,
        element: (
          <Suspense fallback={<PageLoader />}>
            <ErrorBoundary>{route.element}</ErrorBoundary>
          </Suspense>
        ),
      })),
      ...privateRoutes.map((route) => ({
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
