/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        2: "320px 1fr",
        3: '300px 300px 300px'
      },
    },
  },
  plugins: [],
};
