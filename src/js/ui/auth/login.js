import { BASE_URL } from "../../api/constants.js";
import { login } from "../../api/auth/login.js";

export async function onLogin(event) {
  event.preventDefault();
  const email = document.getElementById("login-email");
  const password = document.getElementById("login-password");

  const loginData = {
    email: email.value,
    password: password.value,
  };

  try {
    const isLoggedIn = await login(loginData);

    if (isLoggedIn) {
      window.location.href = `${BASE_URL}`;
    }
  } catch (error) {
    email.classList.add("border", "border-salmonRed", "bg-red-50");
    password.classList.add("border", "border-salmonRed", "bg-red-50");
    console.error = `${error.message}`;
  }
}
