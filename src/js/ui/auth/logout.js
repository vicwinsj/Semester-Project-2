import { BASE_URL } from "../../api/constants";

export function onLogout(event) {
  event.preventDefault();
  const isLoggedIn = localStorage.accessToken;
  if (isLoggedIn) {
    localStorage.removeItem("accessToken");

    if (window.location.pathname === `${BASE_URL}/profile/`) {
      window.location.href = `${BASE_URL}`;
    } else {
      location.reload();
    }
  }
}
