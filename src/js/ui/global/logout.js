import { onLogout } from "../auth/logout.js";

export function setLogoutListener() {
  const logoutButton = document.getElementById("logout-btn");
  logoutButton.addEventListener("click", (event) => onLogout(event));
}