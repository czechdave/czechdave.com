import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";

const containerElement = document.getElementById("root")!;

if (containerElement.childNodes.length === 0) {
  const root = createRoot(containerElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  hydrateRoot(
    containerElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
