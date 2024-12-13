import { GH_BASE } from "../../api/constants";

export function onLogout(event) {
  event.preventDefault();
  const isLoggedIn = localStorage.accessToken;
  if (isLoggedIn) {
    localStorage.removeItem("accessToken");

    if (window.location.pathname === `${GH_BASE}/profile/`) {
      window.location.href = `${GH_BASE}`;
    } else {
      location.reload();
    }
  }
}
