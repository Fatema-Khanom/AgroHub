/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// const withMT = require("@material-tailwind/react/utils/withMT");
 
// module.exports = withMT({
//   // content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
//     "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });

// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//     content: ["./src/**/*.{js,jsx,ts,tsx}"],
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// });
// tailwind.config.js
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
