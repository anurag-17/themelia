/** @type {import('tailwindcss').Config} */

module.exports = {
 
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./Components/**/*.{js,ts,jsx,tsx}"
    ],
  theme: {
    extend: {
      colors: {
        textheading: "#111827",
        green: "#006060",
        pahragraph: "#334155",
        darkgreen: "#006060",
        backgroudcolor: "#F9FAFB",
        headerwidth: "1280px",
        footertext: "#D1D5DB",
        footermain: "#9CA3AF",
        selectcolor: "#374151",
        button: "#334155",
        textcolor: "#6B7280",
        hrcolor: "#4B5563",
      },

      backgroundImage: {
        "hero-pattern": "url('/image/home-banner.png')",
        testimonalimg: "url('/image/testimonal-banner.png')",
        "footer-texture": "url('/home-banner.png')",
      },
      screens: {
        "3xl": "1368px",
        "1200xl": "1200",
      },
      borderRadius: {
        buttonborder: "12px",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};

