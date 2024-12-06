import { jwtDecode } from "jwt-decode";

export function getUserFromToken() {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("Access token is missing. User is not logged in.");
  }

  const user = jwtDecode(accessToken);
  return user;
}
