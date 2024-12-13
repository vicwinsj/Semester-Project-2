import { GH_BASE } from "../../api/constants.js";
import { register } from "../../api/auth/register.js";
import { login } from "../../api/auth/login.js";

export async function onRegister(event) {
  event.preventDefault();

  const name = document.getElementById("register-name").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  const registerData = {
    name: name,
    email: email,
    password: password,
  };

  try {
    const isRegistered = await register(registerData);

    if (isRegistered) {
      alert("Successfully registered!");

      await login(email, password);
      window.location.href = `${GH_BASE}`;
    }
  } catch (error) {
    console.error("Error in onRegister:", error.message);
  }
}
