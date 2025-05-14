/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#2A7B9B",
          2: "#57C785",
          3: "#EDDD53"
        }
      },
      fontFamily: {
        sora: "var(--font-sora)",
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      }
    },
  },
  plugins: [],
}

