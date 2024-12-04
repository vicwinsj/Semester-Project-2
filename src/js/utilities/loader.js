export function createLoader() {
  const loader = document.createElement("div");
  loader.classList.add(
    "loader",
    "absolute",
    "inset-0",
    "flex",
    "justify-center",
    "items-center"
  );

  loader.innerHTML = `
    <div class="loader-ball animate-bounce1 w-4 h-4 bg-focusBlue rounded-full"></div>
    <div class="loader-ball animate-bounce2 w-6 h-6 bg-primaryBlue rounded-full"></div>
    <div class="loader-ball animate-bounce3 w-8 h-8 bg-hoverBlue rounded-full"></div>
  `;

  return loader;
}

export function showLoader(loader) {
  if (loader) {
    loader.classList.remove("hidden");
    loader.classList.add("flex");
  }
}

export function hideLoader(loader) {
  if (loader) {
    loader.classList.add("hidden");
    loader.classList.remove("flex");
  }
}
