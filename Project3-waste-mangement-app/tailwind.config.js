/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-link-blue": "#50B498",
        "custom-offWhite": "#F7F7F7",
      },
      backgroundImage: {
        "hero-cover": "url('/images/hero_cover.jpg')",
        sign_cover: "url('/images/sign_cover.jpg]",
      },
    },
  },
  plugins: [],
};
