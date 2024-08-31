import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-ga4": "react-ga4",
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
    commonjsOptions: {
      include: "node_modules/**",
      namedExports: {
        "node_modules/react/index.js": ["createContext"],
      },
    },
    rollupOptions: {
      // external: ["react-ga4"], // Supprimez cette ligne
    },
  },
});
