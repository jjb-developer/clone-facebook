/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{svelte,html}"],
  theme: {
    extend: {
      colors: {
         azul: '#1877F2',
         verde: '#36A420',
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/line-clamp'),require('@tailwindcss/typography')],
}
