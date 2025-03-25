import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/CraftHaven/", // ✨ مطابق لاسم المستودع
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
