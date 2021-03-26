module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    backdropFilter: {
      none: "none",
      blur: "blur(20px)",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      courier: ["Times New Roman"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-filters"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
