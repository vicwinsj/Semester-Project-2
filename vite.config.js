import { resolve } from "path";
import { defineConfig } from "vite";

const isVercel = process.env.VERCEL === "1";

export default defineConfig({
  appType: "mpa",
  base: isVercel ? "/" : "/Semester-Project-2/",
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
        // editListing: resolve(__dirname, "./listing/edit/index.html"),
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
