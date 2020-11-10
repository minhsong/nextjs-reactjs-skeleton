module.exports = {
  theme: {
    extend: {
      colors: {
        // you can add your own colors here
      }
    },
    fontFamily: {
      display: ['Ubuntu', 'sans-serif'],
      body: ['Roboto', 'sans-serif']
    },
    zIndex: {
      floor: 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      alwaysTop: 999,
      auto: 'auto'
    }
  },
  variants: {},
  plugins: [],
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ]
}
