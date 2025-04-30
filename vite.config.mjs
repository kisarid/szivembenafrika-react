import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

import tsconfigPaths from "vite-tsconfig-paths";

const config = {
  plugins: [react(), svgr(), tsconfigPaths()],
};

// https://vitejs.dev/config/
export default defineConfig(config);
