module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        spacegrey: {
          DEFAULT: "#9DA3AA",
          lighter: "#D4DAE0",
          darker: "#777B81",
        },
        dark: {
          DEFAULT: "#222326",
          lighter: "#303236",
          darker: "#1F2023",
        },
      },
    },
  },
  plugins: [],
};
