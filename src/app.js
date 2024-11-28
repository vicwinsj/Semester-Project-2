import "./css/style.css";
import router from "./js/router/index.js";

await router(window.location.pathname);

const fontAwesomeScript = document.createElement("script");
fontAwesomeScript.src = "https://kit.fontawesome.com/7d99a0a315.js";
fontAwesomeScript.crossOrigin = "anonymous";
document.head.appendChild(fontAwesomeScript);

document.addEventListener("DOMContentLoaded", () => {
  const basePath = "/semester-project-2";
  document.querySelectorAll("a[href^='/']").forEach((link) => {
    link.href = basePath + link.getAttribute("href");
  });
  document.querySelectorAll("img[src^='/']").forEach((img) => {
    img.src = basePath + img.getAttribute("src");
  });
});
