/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-accent": "#5B0CF8",
        "main-font": "#000",
        "light-font": "#fff",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        "hero-bg": "url('/images/backgrounds/Up bg.svg')",
        "mid-bg": "url('/images/backgrounds/midbackground.png')",
        "roadmap-bg": "url('/images/backgrounds/Roadmap.png')",
      },
    },
  },
  plugins: [],
};
