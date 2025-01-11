import { lazy } from "react";

export const ProfilePageAsync = lazy(
  () =>
    new Promise((res) => {
      setTimeout(() => {
        res(import("./ProfilePage"));
      }, 1500);
    })
);
