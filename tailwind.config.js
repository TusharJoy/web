/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#475569",
      },
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        portfolio: {
          primary: "#2563eb",
          "primary-focus": "#1d4ed8",
          "primary-content": "#ffffff",
          secondary: "#475569",
          "secondary-focus": "#334155",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#f1f5f9",
          "base-content": "#1f2937",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
};
