import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((res) => {
      setTimeout(() => {
        res(import("./MainPage"));
      }, 500);
    })
);
