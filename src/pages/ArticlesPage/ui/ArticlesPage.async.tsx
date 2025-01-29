import { lazy } from "react";

export const ArticlesPageAsync = lazy(
  () =>
    new Promise((res) => {
      setTimeout(() => {
        res(import("./ArticlesPage"));
      }, 500);
    })
);
