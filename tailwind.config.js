/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bgSecondary: "#273043",
      bgPrimary: "#001228",
      accent: "#8C1919",
      frontSecondary: "#92828D",
      frontSecondaryOnSecondary: "#aaa",
      frontPrimary: "#FCECC9",
    },
    fontFamily: {
      title: ["Montserrat", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    // `techy` comes from assets/images/bg-techy.png; make sure it's fits cover and is centered and rotated 90°
    // backgroundImage: (_theme) => ({
    //   techy: "url('/assets/images/bg-techy.png')",
    // }),
  },
  plugins: [],
};
