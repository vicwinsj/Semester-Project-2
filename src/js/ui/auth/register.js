import { register } from "../../api/auth/register.js";

export async function onRegister(event) {
  event.preventDefault();
  const registerData = {
    name: document.getElementById("register-name").value,
    email: document.getElementById("register-email").value,
    password: document.getElementById("register-password").value,
  };

  try {
    const isRegistered = await register(registerData);

    if (isRegistered) {
      window.location.href = "/";
    }
  } catch (error) {
    console.error("Error in onRegister:", error.message);
  }
}
