/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0E1F3B",
        gold: "#D8B65A",
        beige: "#F7F3ED"
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['Inter', "system-ui", "sans-serif"]
      },
      boxShadow: {
        subtle: "0 8px 24px rgba(14,31,59,0.08)"
      },
      borderRadius: {
        '2xl': "1.25rem"
      }
    },
  },
  plugins: [],
}
