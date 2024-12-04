import { API_AUTH_LOGIN } from "../constants.js";
import { getKey } from "./key.js";
import { accountError } from "./error.js";
import { doFetch } from "../../utilities/doFetch.js";

export async function login({ email, password }) {
  try {
    const data = await doFetch(`${API_AUTH_LOGIN}`, {
      method: "POST",
      body: { email: email, password: password },
    });

    if (data) {
      getKey(data);
      window.location.href = "/";
      return true;
    } else {
      accountError(data);
      return false;
    }
  } catch (error) {
    const errorMessage = document.getElementById("login-error");
    errorMessage.innerText = `${error.message}`;
    return false;
  }
}
