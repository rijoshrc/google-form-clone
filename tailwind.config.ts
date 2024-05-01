import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#27283E",
        "primary-dark": "#fff",
        secondary: "#707172",
        "secondary-dark": "#707172",
        // button
        "primary-btn": "#fff",
        "primary-btn-dark": "#fff",
        "destructive-btn": "#fff",
        "destructive-btn-dark": "#fff",
        "secondary-btn": "#000",
        "secondary-btn-dark": "#000",
        "outline-btn": "#000",
        "outline-btn-dark": "#fff",
        "ghost-btn": "#000",
        "ghost-btn-dark": "#fff",
        "link-btn": "#000",
        "link-btn-dark": "#fff",
        // end of button
        accent: "#80D17A",
        "input-dark": "#fff",
      },
      backgroundColor: {
        primary: "#fff",
        "primary-dark": "#000",
        secondary: "#f0f0f0",
        "secondary-dark": "#515151",
        // button
        "primary-btn": "#80D17A",
        "primary-btn-dark": "#80D17A",
        "destructive-btn": "red",
        "destructive-btn-dark": "red",
        "secondary-btn": "#f4e5d1",
        "secondary-btn-dark": "#f4e5d1",
        "ghost-btn": "rgb(246, 246, 249)",
        "ghost-btn-dark": "rgb(57, 56, 56)",
        // end of button
        accent: "#80D17A",
        success: "#80D17A",
        "input-dark": "#000",
      },
      borderColor: {
        // button
        "outline-btn": "#000",
        "outline-btn-dark": "#fff",
        // end of button
        accent: "#80D17A",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
