import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'niceblue': '#389dff',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
      keyframes: {
        customscale: {
          '0%': { 
            transform: 'scale(1.0)',
          },
          '100%': { 
            transform: 'scale(2.0)',
          },
        }
      },
      animation: {
        "custom-scale": "customscale 1s ease 1",
      },
      dropShadow: {
        'fontlg': '0px 0px 2px #f5f5f5',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'inset': 'inset 0 0 7px rgba(0, 0, 0, 0.4)',
        'blackbg': '0 0 7px rgba(0, 0, 0, 1)',
        'whitebg': '0 0 10px 7px rgba(255, 255, 255, 0.7)',
        'lightbluebg': '-1px -1px 10px 3px rgba(173,216,230, 0.7)',
        'darkgulp': '-1px -1px 120px 40px rgba(0, 255, 255, 0.6)',
      }
    }
  },
  plugins: [
    require("tailwindcss-animate")
  ],
  darkMode: 'class',
};
export default config;
