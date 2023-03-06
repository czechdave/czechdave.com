/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      animation: {
        "spin-icons": "spin 50s linear infinite",
        "spin-icons-rev": "spin 50s linear reverse infinite",
      },
    },
  },
  plugins: [],
};
