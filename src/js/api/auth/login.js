import { API_AUTH_LOGIN } from "../constants.js";
import { getKey } from "./key.js";
import { authError } from "./error.js";
import { doFetch } from "../../utilities/doFetch.js";

export async function login({ email, password }) {
  try {
    const data = await doFetch(`${API_AUTH_LOGIN}`, {
      method: "POST",
      body: { email: email, password: password },
    });
    getKey(data);
    return true;
  } catch (error) {
    const errorDetails = JSON.parse(error.message.split(". ")[1] || "{}");
    console.error("Login error details:", errorDetails);

    authError(errorDetails);
    throw error;
  }
}
