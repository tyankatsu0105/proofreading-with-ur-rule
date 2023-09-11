import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import commonjs from "vite-plugin-commonjs";

export default defineConfig({
  plugins: [solid(), commonjs()],
  define: {
    "process.env": {},
  },
});
