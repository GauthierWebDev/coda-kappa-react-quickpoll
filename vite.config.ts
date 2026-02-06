import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { telefunc } from "telefunc/vite";
import vike from "vike/plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vike(), react(), tailwindcss(), telefunc()],
  resolve: {
    alias: {
      "@": __dirname,
    },
  },
});
