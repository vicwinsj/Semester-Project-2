import { onLogout } from "../auth/logout.js";

export function setLogoutListener() {
  const logoutButton = document.getElementById("menu-logout");
  logoutButton.addEventListener("click", (event) => onLogout(event));
}
