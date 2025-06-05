import { BASE_URL } from "../../api/constants.js";
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
  if (!window.location.pathname.startsWith("/auth/")) {
    burgerButton.addEventListener("click", (event) => {
      event.preventDefault();
      menu.classList.toggle("hidden");
      menu.classList.toggle("flex");
    });
  }

  if (accessToken) {
    const loggedInUser = getUserFromToken();

    auctionButton.classList.remove("hidden");
    registerButton.classList.add("hidden");
    loginButton.classList.add("hidden");
    logoutButton.classList.remove("hidden");

    const user = await fetchUserProfile(loggedInUser.name);

    profileButton.classList.remove("hidden");
    profileButton.href = `${BASE_URL}profile/?name=${user.name}`;

    const menuAvatar = document.getElementById("menu-avatar");
    menuAvatar.classList.remove("hidden");
    menuAvatar.src = user.avatar.url;
    menuAvatar.alt = user.avatar.alt;
  }
}
