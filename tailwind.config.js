// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}', // Gatsby uses JSX/TSX files
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// import  flowbite  from "flowbite/plugin";
/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin"
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ matchVariant }) {
      matchVariant(
        "nth",
        value => {
          return `&:nth-child(${value})`
        },
        {
          values: {
            1: "1",
            2: "2",
            3: "3",
          },
        }
      )
    }),
  ],
}
