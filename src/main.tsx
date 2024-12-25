import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import { MainPage } from "./pages/MainPage";
import { AboutPage } from "./pages/AboutPage";
import App from "./app/App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <p>header</p>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/main",
        element: <MainPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      {/* <App /> */}
    </ThemeProvider>
  </StrictMode>
);
