import { headers } from "../api/headers.js";
import { doFetch } from "./doFetch";
import { API_SOCIAL_POSTS } from "../api/constants.js";

export async function getLoggedInUser() {
  const response = await doFetch(`${API_SOCIAL_POSTS}/profiles`, {
    headers: headers(),
  });
  const user = await response.json();
  console.log(user);
  return user;
}
