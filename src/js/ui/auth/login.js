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
      console.log("success login");
      window.location.href = "/";
    } else {
    }
  } catch (error) {
    errorMessage.innerText = `${error.message}`;
  }
}
