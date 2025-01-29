import { lazy } from "react";

export const ArticleDetailsPageAsync = lazy(
  () =>
    new Promise((res) => {
      setTimeout(() => {
        res(import("./ArticleDetailsPage"));
      }, 500);
    })
);
