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
        main: resolve(__dirname, "./index.html"),
        login: resolve(__dirname, "./auth/login/index.html"),
        register: resolve(__dirname, "./auth/register/index.html"),
        profile: resolve(__dirname, "./profile/index.html"),
        listing: resolve(__dirname, "./listing/index.html"),
        // editListing: resolve(__dirname, "./listing/edit/index.html"),
        createListing: resolve(__dirname, "./listing/create/index.html"),
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
