/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/page/Competence.js",
    "./src/components/page/Experience.js",
    "./src/components/page/Home.js",
    "./src/components/page/Work.js",
    "./src/components/navigation/Nav.js",
    "./src/components/navigation/NavReseaux.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        // Add more custom colors as needed
      },
      fontFamily: {
        custom: ["Montserrat", "sans-serif"],
        // Add more custom fonts as needed
      },
      // Add more theme extensions as needed
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Enables styling for form elements
    require('@tailwindcss/typography'), // Adds a set of prose styles for rich text elements
    require('tailwindcss-debug-screens'), // Adds screen size indicators for easier responsive design
    // Add more plugins as needed
  ],
};
