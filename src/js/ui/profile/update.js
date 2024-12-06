import { updateProfile } from "../../api/profile/update.js";

export function onUpdateInitializing(event, user) {
  const main = document.querySelector("main");
  event.preventDefault();

  const overlay = document.createElement("div");
  overlay.classList.add(
    "bg-skyBlue",
    "bg-opacity-70",
    "w-screen",
    "h-screen",
    "fixed",
    "top-0",
    "left-0"
  );

  const updateContainer = document.createElement("div");
  updateContainer.classList.add(
    "z-1",
    "w-1/2",
    "h-full",
    "p-10",
    "absolute",
    "top-1/2",
    "left-1/2",
    "transform",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "bg-white",
    "rounded-xl",
    "shadow-lg",
    "flex",
    "items-center",
    "gap-10"
  );

  const avatarContainer = document.createElement("div");
  avatarContainer.classList.add(
    "flex-[1]",
    "bg-gray-300",
    "rounded-full",
    "overflow-hidden"
  );

  const avatar = document.createElement("img");
  avatar.classList.add("w-64", "h-64", "object-cover");
  avatar.src = user.avatar.url;
  avatar.alt = user.avatar.alt;

  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add(
    "flex-[1]",
    "h-full",
    "flex",
    "flex-col",
    "justify-between"
  );

  const exitButtonContainer = document.createElement("div");
  exitButtonContainer.classList.add("flex", "justify-end");

  const exitButton = document.createElement("button");

  const xmark = document.createElement("i");
  xmark.classList.add("fa-solid", "fa-xmark");

  exitButton.append(xmark);

  exitButtonContainer.append(exitButton);

  exitButton.addEventListener("click", (event) => {
    event.preventDefault;
    overlay.remove();
    updateContainer.remove();
  });

  const inputContainer = document.createElement("div");
  inputContainer.classList.add("flex", "flex-col", "gap-3");

  const label = document.createElement("label");
  label.classList.add("text-xl", "font-semibold");
  label.htmlFor = "avatar-url";
  label.innerHTML = "Change avatar";

  const input = document.createElement("input");
  input.classList.add("w-full");
  input.name = "avatar-url";
  input.type = "url";
  input.value = user.avatar.url;
  input.placeholder = "Insert image URL";

  inputContainer.append(label, input);

  const updateButtonContainer = document.createElement("div");
  updateButtonContainer.classList.add("flex", "justify-end");

  const updateButton = document.createElement("button");
  updateButton.classList.add("btn");
  updateButton.innerText = "Update";

  updateButton.addEventListener("click", (event) => {
    onUpdateProfile(event, user);
  });

  updateButtonContainer.append(updateButton);

  detailsContainer.append(
    exitButtonContainer,
    inputContainer,
    updateButtonContainer
  );

  avatarContainer.append(avatar);

  updateContainer.append(avatarContainer, detailsContainer);

  main.append(overlay, updateContainer);
}

export async function onUpdateProfile(event, user) {
  event.preventDefault();
  const avatarURL = document.querySelector("input[name='avatar-url']");
  const newAvatar = avatarURL.value;

  const avatarObject = {
    url: newAvatar,
    alt: user.name + "'s Avatar",
  };

  updateProfile(user.name, { avatar: avatarObject });
}
