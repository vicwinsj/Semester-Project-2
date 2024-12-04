import { accessToken } from "../api/auth/key.js";

function generateLogoutVisibility() {
  const logoutButton = document.getElementById("logout-btn");
  if (!accessToken) {
    logoutButton.classList.add("hidden");
  } else if (logoutButton.classList.contains("hidden")) {
    logoutButton.classList.remove("hidden");
  }
}
function generateLoginVisibility() {
  const loginButton = document.getElementById("login-btn");
  if (accessToken) {
    loginButton.classList.add("hidden");
  } else if (loginButton.classList.contains("hidden")) {
    loginButton.classList.remove("hidden");
  }
}

function generateRegisterVisibility() {
  const registerButton = document.getElementById("register-btn");
  if (accessToken) {
    registerButton.classList.add("hidden");
  } else if (registerButton.classList.contains("hidden")) {
    registerButton.classList.remove("hidden");
  }
}

export function generateMenu() {
  generateLogoutVisibility();
  generateLoginVisibility();
  generateRegisterVisibility();
}
