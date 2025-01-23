import React from "react";
import "./the-styles.css";
import "./position.css";
import { App } from "~/components/App";
import { createRoot } from 'react-dom/client';

const throwError = (message: string): never => {
  throw new Error(message);
}

const container = document.getElementById("root");
const root = container
  ? createRoot(container)
  : throwError("entrypoint html must contain an element with id 'root'");

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
