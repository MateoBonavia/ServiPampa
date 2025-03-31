module.exports = {
  content: ['./app/**/*.{html,js,jsx,ts,tsx}'], // Incluye más extensiones y subdirectorios
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
};
