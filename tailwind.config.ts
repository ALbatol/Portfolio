import type { Config } from "tailwindcss"; 
/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#96031A",
        background: "#FFF9ED",
        main_text: "#222222",
        sub_text: "#4B4B4B",
      },
      fontFamily: {
        oldstandard: ["oldstandard"],
        Lato: ["lato"],
      },  
    },
  },
  plugins: [require("daisyui")],
  
};
export default config;
