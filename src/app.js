import "./css/style.css";
import router from "./js/router/index.js";
import { toggleMenu } from "./js/ui/global/menu.js";
import { setLogoutListener } from "./js/ui/global/logout.js";
import { search } from "./js/ui/global/search.js";

document.addEventListener("DOMContentLoaded", async () => {
  await router(window.location.pathname);

  await toggleMenu();
  setLogoutListener();
  await search();
});

const fontAwesomeScript = document.createElement("script");
fontAwesomeScript.src = "https://kit.fontawesome.com/7d99a0a315.js";
fontAwesomeScript.crossOrigin = "anonymous";
document.head.appendChild(fontAwesomeScript);
