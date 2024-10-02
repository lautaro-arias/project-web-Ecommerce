import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
      },
      backgroundImage: {
        
        'bgEjemplo':"url('./assets/ejemplo.png')] ",
        'bgBanner':"url('./assets/banner.png')] ",
      },
    }, 
  },
  plugins: [
    require("daisyui")
  ],
};
export default config;
