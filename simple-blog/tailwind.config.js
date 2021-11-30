/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  jit: process.env.NODE_ENV === "development" ? "jit" : "",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans"],
      heading: ["Baloo"],
    },
    extend: {
      colors: {
        primary: "#F582AE",
        dark: "#040404",
        bg: "#FEF6E4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
