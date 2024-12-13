import { BASE_URL } from "../../api/constants.js";
import { register } from "../../api/auth/register.js";
import { login } from "../../api/auth/login.js";

export async function onRegister(event) {
  event.preventDefault();

  const name = document.getElementById("register-name");
  const email = document.getElementById("register-email");
  const password = document.getElementById("register-password");

  const registerData = {
    name: name.value,
    email: email.value,
    password: password.value,
  };

  try {
    const isRegistered = await register(registerData);

    if (isRegistered) {
      alert("Successfully registered!");
      try {
        await login({ email, password });
        window.location.href = `${BASE_URL}`;
      } catch (loginError) {
        alert("Login failed. Please try logging in manually.");
        console.error("Login error after registration:", loginError.message);
        window.location.href = `${BASE_URL}/auth/login`;
      }
    }
  } catch (error) {
    name.classList.add("border", "border-salmonRed", "bg-red-50");
    email.classList.add("border", "border-salmonRed", "bg-red-50");
    password.classList.add("border", "border-salmonRed", "bg-red-50");
    console.error("Error in onRegister:", error.message);
  }
}
