import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import "./tailwind.css";
import App from "./Pages/Components/App/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
