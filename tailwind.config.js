/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D232A",
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries'),],
};
