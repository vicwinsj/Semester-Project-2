import { onLogout } from "../auth/logout.js";

export function setLogoutListener() {
  const logoutButton = document.getElementById("menu-logout");
  if (!window.location.pathname.startsWith("/auth/")) {
    logoutButton.addEventListener("click", (event) => onLogout(event));
  }
}
