import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "./app/providers/ThemeProvider";
import { ErrorBoundary } from "./app/providers/ErrorBoundary/index.ts";

import App from "./app/App.tsx";

import "./app/styles/index.css";
import { StoreProvider } from "./app/providers/StoreProvider/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </StoreProvider>
  </StrictMode>
);
