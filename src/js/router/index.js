import { BASE_URL } from "../api/constants.js";

export default async function router(pathname = window.location.pathname) {
  const basePath = `${BASE_URL}`;

  let cleanPath;

  if (basePath.length > 1) {
    cleanPath = pathname.replace(basePath, "/").replace(/\/index\.html$/, "/");
  } else {
    cleanPath = pathname.replace(/\/index\.html$/, "/");
  }

  let view;

  switch (cleanPath) {
    case "/":
      view = await import("./views/home.js");
      break;
    case "/auth/login/":
      view = await import("./views/login.js");
      break;
    case "/auth/register/":
      view = await import("./views/register.js");
      break;
    case "/listing/":
      view = await import("./views/listing.js");
      break;
    case "/listing/create/":
      view = await import("./views/listingCreate.js");
      break;
    case "/profile/":
      view = await import("./views/profile.js");
      break;
    default:
      view = await import("./views/notFound.js");
  }

  if (view && typeof view.default === "function") {
    view.default();
  }
}
