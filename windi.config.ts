import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["src/**/*.{js,ts,jsx,tsx}"],
  },
});
