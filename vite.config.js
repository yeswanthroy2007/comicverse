import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const htmlInputs = {
  main: resolve(__dirname, "index.html"),
  browse: resolve(__dirname, "browse.html"),
  detail: resolve(__dirname, "comic-detail.html"),
  cart: resolve(__dirname, "cart.html"),
};

// IMPORTANT: Update the base path below to match your GitHub repository name
// If your repo is named "my-comicverse", change '/COMIC_VERSE-main/' to '/my-comicverse/'
// The base path should be: '/YOUR_REPO_NAME/' (with leading and trailing slashes)
const REPO_NAME = 'comicverse'; // Change this to your actual repository name

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? `/${REPO_NAME}/` : '/',
  root: __dirname,
  server: {
    port: 4173,
    open: "/index.html",
    fs: {
      strict: true,
      allow: [__dirname],
    },
  },
  preview: {
    port: 4173,
    open: "/index.html",
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: htmlInputs,
    },
  },
});
