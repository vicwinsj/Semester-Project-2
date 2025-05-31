import { defineConfig } from "vite";

export default defineConfig({
  // const isGitHubPages = mode === "production";
  // const base = isGitHubPages ? "/Semester-Project-2/" : "/";

  appType: "mpa",
  base: "/",
  css: {
    devSourcemap: true,
  },
  build: {
    target: "esnext",
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "./index.html",
        login: "./auth/login/index.html",
        register: "./auth/register/index.html",
        profile: "./profile/index.html",
        listing: "./listing/index.html",
        createListing: "./listing/create/index.html",
      },
    },
  },
  server: {
    host: true,
    port: 5176,
  },
  resolve: {
    alias: {},
  },
});
