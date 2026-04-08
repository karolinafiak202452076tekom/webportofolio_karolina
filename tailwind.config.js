/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ini akan mencari Tailwind class di SEMUA file di dalam src
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        dark: '#0f172a',
      }
    },
  },
  plugins: [],
}