/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "dim", "sunset"],
  },
  theme: {
    extend: {
      fontFamily: {
        exo: '"Exo 2", sans-serif',
        open: '"Open Sans", sans-serif',
        mplus: '"M PLUS Rounded 1c", sans-serif',
      },
      backgroundImage: {
        'auth1': "url('https://img.freepik.com/premium-photo/closeup-within-textile-manufacturing-industry_988095-5955.jpg?w=1060')",
        'auth2': "url('https://img.freepik.com/premium-photo/yarn-cotton-textile-mill_87720-111556.jpg?w=1060')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}

