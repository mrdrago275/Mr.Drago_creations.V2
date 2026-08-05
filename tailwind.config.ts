import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0b0b",
        foreground: "#ffffff",
        primary: "#e60023",
        secondary: "#c0c0c0",
        accent: "#ff1744",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        glow: "0 0 20px rgba(230,0,35,0.5)",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },

      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          from: { boxShadow: "0 0 5px rgba(230,0,35,0.3)" },
          to: { boxShadow: "0 0 25px rgba(230,0,35,0.8)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
