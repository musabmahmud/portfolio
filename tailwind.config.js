module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      'licorice': ['Licorice'],
      'monospace': ['Ubuntu Mono', 'monospace'],
    },
    extend: {
      colors: {
        'white': '#ffffff',
        green: {
          DEFAULT: '#22c55e',
        },
        blue: {
          DEFAULT: '#6366f1',
        },
        gray: {
          DEFAULT: '#e5e7eb',
        },
        red: {
          DEFAULT: '#ef4444',
        },
        slate:{
          DEFAULT: '#334155',
        },
        dark: {
          DEFAULT: '#000',
        },
      },
    },
  },
  plugins: [],
}
