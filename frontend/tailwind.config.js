// const flowbite = require("flowbite-react/tailwind");
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}',
//     flowbite.content(),
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     flowbite.plugin(),
//     require('tailwind-scrollbar'),
//   ],
// };


import flowbite from "flowbite-react/tailwind";
import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(), // Ensure it's spread correctly
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
    tailwindScrollbar, // Use imported module instead of require()
  ],
};


















