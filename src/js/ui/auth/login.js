import { BASE_URL } from "../../api/constants.js";
import { login } from "../../api/auth/login.js";

export async function onLogin(event) {
  event.preventDefault();
  const loginData = {
    email: document.getElementById("login-email").value,
    password: document.getElementById("login-password").value,
  };

  const errorMessage = document.getElementById("login-error");

  try {
    const isLoggedIn = await login(loginData);

    if (isLoggedIn) {
      window.location.href = `${BASE_URL}`;
    }
  } catch (error) {
    errorMessage.innerText = `${error.message}`;
  }
}
