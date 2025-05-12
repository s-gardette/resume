/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.vue", "./src/**/*.html", "./src/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "8xl": ["8rem", "6.5rem"],
        "6xl": ["6rem", "4.5rem"],
        "5xl": ["5rem", "3.5rem"],
      },
      screens: {
        print: { raw: "print" },
        screen: { raw: "screen" },
      },
      letterSpacing: {
        tightest: "-.2em",
      },
      fontFamily: {
        // Use Archivo Black for titles/headings
        title: ["Archivo Black", "sans-serif"],
        display: ["Archivo Black", "sans-serif"],
        // Use Archivo for body text
        body: ["Archivo", "sans-serif"],
      },
      colors: {
        blue: {
          DEFAULT: "#0024cc",
          50: "#e5e9ff",
          100: "#ccd4ff",
          200: "#99aaff",
          300: "#667fff",
          400: "#3355ff",
          500: "#0024cc", // Base
          600: "#001fa3",
          700: "#001a7a",
          800: "#001452",
          900: "#000e29",
          950: "#000714",
        },
        gold: {
          // Renamed from red
          DEFAULT: "#e0b81f",
          50: "#fef8e8",
          100: "#fdf0d2",
          200: "#fbe2a5",
          300: "#f8d478",
          400: "#f4c54b", // Base slightly lighter
          500: "#e0b81f", // Base
          600: "#c8a51c",
          700: "#a08416",
          800: "#786310",
          900: "#50420b",
          950: "#282105",
        },
        white: {
          DEFAULT: "#FFF",
          50: "#ebd999", // New light beige color
          // Keep existing shades or adjust if needed
          100: "#f7f5f0", // Example existing
          200: "#f0eae1", // Example existing
          300: "#e8e0d2", // Example existing
          400: "#e1d5c3", // Example existing
          500: "#d9cab3", // Example existing
          600: "#bfa57f", // Example existing
          700: "#9f7f50", // Example existing
          800: "#6a5535", // Example existing
          900: "#352a1b", // Example existing
          800: "#6a5535",
          700: "#9f7f50",
          600: "#bfa57f",
          500: "#d9cab3",
          400: "#e1d5c3",
          300: "#e8e0d2",
          200: "#f0eae1",
          100: "#f7f5f0",
          0: "#ffffff",
        },
        black: {
          DEFAULT: "#050807",
          900: "#050807",
          800: "#0b100f",
          700: "#101716",
          600: "#161f1e",
          500: "#1c2826",
          400: "#405b57",
          300: "#649089",
          200: "#96b6b1",
          100: "#cbdbd8",
        },
        ivory: {
          DEFAULT: "#ebd999",
        },
        transparent: "transparent",
      },
    },
  },
  plugins: [],
};
