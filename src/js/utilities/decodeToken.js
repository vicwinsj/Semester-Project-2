import { jwtDecode } from "jwt-decode";

export function getUserFromToken() {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    console.warn("Access token is missing. User is not logged in.");
    return null;
  }

  const user = jwtDecode(accessToken);
  return user;
}
