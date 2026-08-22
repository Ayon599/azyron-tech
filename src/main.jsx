import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../css/styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const deploymentBase = import.meta.env.BASE_URL;
const fixAssetPaths = () => {
  document.querySelectorAll("img[src^='/assets/'], a[href^='/assets/']").forEach(element => {
    const attribute = element.tagName === "IMG" ? "src" : "href";
    element.setAttribute(attribute, `${deploymentBase}${element.getAttribute(attribute).slice(1)}`);
  });
};

new MutationObserver(fixAssetPaths).observe(document.getElementById("root"), { childList: true, subtree: true });
fixAssetPaths();
