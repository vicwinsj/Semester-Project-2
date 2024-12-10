import { API_KEY } from "./constants.js";
import { accessToken } from "./auth/key.js";

export function headers(method = "GET", includeAuth = true) {
  const headers = new Headers();

  if (method !== "GET") {
    headers.append("Content-Type", "application/json");
  }
  if (includeAuth && API_KEY && accessToken) {
    headers.append("Authorization", `Bearer ${accessToken}`);
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  return headers;
}
