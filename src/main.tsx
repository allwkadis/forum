import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { ThemeProvider } from "./theme /ThemeProvider.tsx";
import { TestProvider } from "./app/providers/TestProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <TestProvider>
        <App />
      </TestProvider>
    </ThemeProvider>
  </StrictMode>
);
