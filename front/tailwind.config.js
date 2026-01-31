/** @type {import('tailwindcss').Config} */
export default {
    darkMode: false,
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#2bee6c",
          background: {
            light: "#f6f8f6",
            dark: "#102216",
          },
          text: {
            main: "#111813",
            sub: "#61896f",
          },
        },
        fontFamily: {
          display: ["Newsreader", "serif"],
          sans: ["Noto Sans", "sans-serif"],
        },
        borderRadius: {
          DEFAULT: "0.5rem",
          lg: "1rem",
          xl: "1.5rem",
          full: "9999px",
        },
      },
    },
    plugins: [],
}
  