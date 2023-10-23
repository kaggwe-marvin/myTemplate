/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
