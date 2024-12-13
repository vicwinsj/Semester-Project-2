import { GH_BASE } from "../api/constants";

export function authGuard() {
  if (!localStorage.accessToken) {
    alert("You must be logged in to view this page");
    window.location.href = `${GH_BASE}/auth/login/`;
  }
}
