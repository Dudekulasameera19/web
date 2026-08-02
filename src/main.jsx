import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { App } from "./App";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);