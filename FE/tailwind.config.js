/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    animation: {
      "update-form": "update-form-visible 0.4s ease-in-out",
      "update-form-closed": "update-form-invisible 0.4s ease-in-out",
      "film-detail": "film-detail 0.4s ease-in-out",
    },
  },
  plugins: [],
};
