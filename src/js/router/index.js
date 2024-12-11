export default async function router(pathname = window.location.pathname) {
  const isGitHubPages = location.hostname.includes("github.io");
  const basePath = isGitHubPages ? "/Semester-Project-2" : "/";

  console.log("Original Pathname:", pathname);
  console.log("Base Path:", basePath);

  let cleanPath = pathname.startsWith(basePath)
    ? pathname.slice(basePath.length).replace(/\/index\.html$/, "/")
    : pathname.replace(/\/index\.html$/, "/");

  console.log("Clean Path:", cleanPath);

  let view;

  switch (cleanPath) {
    case "Semester-Project-2/":
      view = await import("./views/home.js");
      console.log(cleanPath);
      break;
    // case "/auth/":
    //   view = await import("./views/auth.js");
    //   break;
    case "/auth/login/":
      view = await import("./views/login.js");
      break;
    case "/auth/register/":
      view = await import("./views/register.js");
      break;
    case "/listing/":
      view = await import("./views/listing.js");
      break;
    // case "/listing/edit/":
    //   view = await import("./views/listingEdit.js");
    //   break;
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
