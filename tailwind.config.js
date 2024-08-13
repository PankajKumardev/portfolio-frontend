/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { keyframes: {
      wave: {
        '0%, 100%': { transform: 'rotate(0deg)' },
        '50%': { transform: 'rotate(20deg)' },
      },
    },
    animation: {
      wave: 'wave 0.6s ease-in-out', // Optional: you can add 'infinite' if you want it to loop
    },},
  },
  plugins: [],
}

