import { GH_BASE } from "../../api/constants.js";
import { accessToken } from "../../api/auth/key.js";
import { getUserFromToken } from "../../utilities/decodeToken.js";
import { fetchUserProfile } from "../../utilities/fetchProfile.js";

const auctionButton = document.getElementById("menu-create");
const registerButton = document.getElementById("menu-register");
const loginButton = document.getElementById("menu-login");
const logoutButton = document.getElementById("menu-logout");
const profileButton = document.getElementById("menu-profile");
const burgerButton = document.getElementById("burger");
const menu = document.getElementById("menu");

export async function toggleMenu() {
  burgerButton.addEventListener("click", (event) => {
    event.preventDefault();
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
  });

  if (accessToken) {
    const loggedInUser = getUserFromToken();

    auctionButton.classList.remove("hidden");
    registerButton.classList.add("hidden");
    loginButton.classList.add("hidden");
    logoutButton.classList.remove("hidden");

    const user = await fetchUserProfile(loggedInUser.name);

    profileButton.classList.remove("hidden");
    profileButton.href = `${GH_BASE}/profile/?name=${user.name}`;

    const menuAvatar = document.getElementById("menu-avatar");
    menuAvatar.classList.remove("hidden");
    menuAvatar.src = user.avatar.url;
    menuAvatar.alt = user.avatar.alt;
  }
}

// export function toggleMenuLinks() {
//   const profile = document.getElementById("profile-btn");
//   const login = document.getElementById("login-btn");
//   const register = document.getElementById("register-btn");
//   const logout = document.getElementById("logout-btn");
//   const accessToken = localStorage.getItem("accessToken");
//   if (accessToken) {
//     profile.classList.remove("hidden");
//     login.classList.add("hidden");
//     register.classList.add("hidden");
//     logout.classList.remove("hidden");
//   } else {
//     profile.classList.add("hidden");
//     logout.classList.add("hidden");
//   }

//   if (window.location.pathname === "/auth/login/") {
//     login.classList.add("hidden");
//   }

//   if (window.location.pathname === "/auth/register/") {
//     register.classList.add("hidden");
//   }
// }

// function generateLogoutVisibility() {
//   const logoutButton = document.getElementById("logout-btn");
//   if (!accessToken) {
//     logoutButton.classList.add("hidden");
//   } else if (logoutButton.classList.contains("hidden")) {
//     logoutButton.classList.remove("hidden");
//   }
// }
// function generateLoginVisibility() {
//   const loginButton = document.getElementById("login-btn");
//   if (accessToken) {
//     loginButton.classList.add("hidden");
//   } else if (loginButton.classList.contains("hidden")) {
//     loginButton.classList.remove("hidden");
//   }
// }

// function generateRegisterVisibility() {
//   const registerButton = document.getElementById("register-btn");
//   if (accessToken) {
//     registerButton.classList.add("hidden");
//   } else if (registerButton.classList.contains("hidden")) {
//     registerButton.classList.remove("hidden");
//   }
// }

// export function generateMenu() {
//   generateLogoutVisibility();
//   generateLoginVisibility();
//   generateRegisterVisibility();
// }
