import { register } from "../../api/auth/register.js";

export async function onRegister(event) {
  event.preventDefault();
  const registerData = {
    name: document.getElementById("register-name").value,
    email: document.getElementById("register-email").value,
    password: document.getElementById("register-password").value,
  };

  const errorMessage = document.getElementById("register-error");

  try {
    const isRegistered = await register(registerData);

    if (isRegistered) {
      window.history.go(-1); //
    }
  } catch (error) {
    errorMessage.innerText = `${error.message}`;
  }
}
