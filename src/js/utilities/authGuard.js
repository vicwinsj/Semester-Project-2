import { BASE_URL } from "../api/constants";

export function authGuard() {
  if (!localStorage.accessToken) {
    alert("You must be logged in to view this page");
    window.location.href = `${BASE_URL}/auth/login/`;
  }
}
