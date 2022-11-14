module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,mdx}"],
  mode: "jit",
  darkMode: "media",
  theme: {
    fontSize: {
      xxs: ".5rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      animation: {
        xBounce: "xBounce 1s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      fontFamily: {
        logo: ["Raleway", "sans-serif"],
      },
      colors: {
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      keyframes: {
        xBounce: {
          "0%, 100%": { transform: "translateX(0.1rem)" },
          "50%": { transform: "translateX(0rem)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0.4rem)" },
          "50%": { transform: "translateY(0rem)" },
        },
      },
      maxWidth: {
        "8xl": "90rem",
      },
      transitionProperty: {
        visibility: "visibility",
        width: "width",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
