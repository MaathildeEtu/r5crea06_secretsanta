import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/r5crea06_secretsanta/", // add repository name here
  plugins: [react()],
});
