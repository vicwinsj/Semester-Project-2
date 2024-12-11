import { fetchUserProfile } from "../../utilities/fetchProfile";
import { getUserFromToken } from "../../utilities/decodeToken.js";
import { onUpdateInitializing } from "../../ui/profile/update.js";
import { getName } from "../../utilities/getFromUrl.js";
import { createLoader } from "../../utilities/loader.js";

export default async function renderProfile() {
  const main = document.querySelector("main");
  const loader = createLoader();
  const content = document.getElementById("profile-content");
  main.appendChild(loader);

  await generateUserProfile();

  content.classList.remove("hidden");
  content.classList.add("flex");

  loader.remove();

  main.classList.add("relative");
}

export function loggedInUserUrl(user) {
  const currentUrl = new URL(window.location.href);

  if (currentUrl.searchParams.get("name") !== user.name) {
    currentUrl.searchParams.set("name", user.name);
    window.history.replaceState({}, "", currentUrl.toString());
  }

  return currentUrl.toString();
}

async function generateUserProfile() {
  const loggedInUser = getUserFromToken();
  const nameFromUrl = getName();

  let user;

  if (!nameFromUrl) {
    loggedInUserUrl(loggedInUser);
    user = await fetchUserProfile(loggedInUser.name);
  } else {
    user = await fetchUserProfile(nameFromUrl);
  }

  const greeting = document.getElementById("profile-greeting");
  greeting.innerText = user.name;

  const username = document.getElementById("profile-username");
  username.innerText = user.name;

  const credits = document.getElementById("profile-credits");
  credits.innerText = user.credits;

  const avatar = document.getElementById("profile-avatar");
  avatar.src = user.avatar.url;
  avatar.alt = user.avatar.alt;

  const banner = document.getElementById("profile-banner");
  banner.style.backgroundImage = `url('${user.banner.url}')`;

  const bio = document.getElementById("profile-bio");
  bio.innerText = user.bio;
  if (user.bio && user.bio.length > 0) {
    bio.classList.add("bg-skyBlue");
  }

  const currentUrl = new URL(window.location.href);

  const avatarButton = document.getElementById("update-avatar");

  if (currentUrl.searchParams.get("name") === loggedInUser.name) {
    avatarButton.classList.remove("hidden");
  }

  avatarButton.addEventListener("click", (event) => {
    onUpdateInitializing(event, user);
  });
}
