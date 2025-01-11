import { lazy } from "react";

export const LoginFormAsync = lazy(
  () =>
    new Promise((res) => {
      setTimeout(() => res(import("./LoginForm")), 1500);
    })
);
