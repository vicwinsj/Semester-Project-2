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
      try {
        await login({ email, password });
        window.location.href = `${GH_BASE}`;
      } catch (loginError) {
        alert("Login failed. Please try logging in manually.");
        console.error("Login error after registration:", loginError.message);
        window.location.href = `${GH_BASE}/auth/login`;
      }
    }
  } catch (error) {
    console.error("Error in onRegister:", error.message);
  }
}
