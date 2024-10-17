export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*,{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      
        colors: {
          'neutralBlue':'#234FEB',
          'neutralPurple':'#A361FF',
          'neutralDarkBlue':'#011DAA',

      }
    },
  },
    plugins: [require('flowbite/plugin')],
}
