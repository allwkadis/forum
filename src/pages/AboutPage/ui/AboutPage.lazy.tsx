import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((res) => {
      setTimeout(() => {
        res(import("./AboutPage"));
      }, 1500);
    })
);
