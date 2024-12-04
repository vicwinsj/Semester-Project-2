import { API_AUTH_REGISTER } from "../constants.js";
import { accountError } from "./error.js";
import { doFetch } from "../../utilities/doFetch.js";

export async function register({ name, email, password, bio, banner, avatar }) {
  try {
    const response = await doFetch(`${API_AUTH_REGISTER}`, {
      method: "POST",
      body: JSON.stringify({ name, email, password, bio, banner, avatar }),
    });
    const data = response.json();

    if (!response.ok) {
      accountError(data);
      throw new Error(data.message || "Registration failed");
    }

    return response.ok;
  } catch (error) {
    throw new Error(error.message);
  }
}
