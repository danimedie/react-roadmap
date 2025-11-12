module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2",
        dark: "#232323"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        gelasio: ["Gelasio", "sans-serif"]
      },
    },
  },
  plugins: [],
}