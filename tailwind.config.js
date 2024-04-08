/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes:["night","acid"],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}

