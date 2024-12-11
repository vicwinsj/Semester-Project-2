import { API_AUTH_REGISTER } from "../constants.js";
import { authError } from "./error.js";
import { doFetch } from "../../utilities/doFetch.js";

export async function register({ name, email, password, bio, banner, avatar }) {
  try {
    const response = await doFetch(`${API_AUTH_REGISTER}`, {
      method: "POST",
      body: { name, email, password, bio, banner, avatar },
    });
    if (response);
    return true;
  } catch (error) {
    const errorDetails = JSON.parse(error.message.split(". ")[1] || "{}");
    console.error("Registration error details:", errorDetails);

    authError(errorDetails);
    throw error;
  }
}
