/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      // TODO : font-nsk로 바로 폰트 사용가능합니다!
      nsk: ['Noto Sans KR', 'cursive']
    },
    colors: {
      blue: {
        100: '#A5C4E8',
        200: '#9ECBFF',
        300: '#93C4FF',
        400: '#6CAFFF',
        500: '#57A4FF',
        600: '#549EF5',
        700: '#3373EC',
        800: '#0253B3',
        900: '#0000FF'
      },
      black: {
        500: '#3D3D3D',
        700: '#33363F',
        900: '#000000'
      },
      white: {
        0: '#FFF',
        100: '#F2F3F5',
        200: '#F4F4F4'
      },
      gray: {
        100: '#D9D9D9',
        200: '#CACACA',
        300: '#B2b9C1',
        400: '#8F8F8F',
        500: '#8C8C8C',
        600: '#808080',
        700: '#515151'
      },
      red: {
        100: '#FFE1E1',
        200: '#F4CED0',
        300: '#FF9393',
        400: '#FF5E5E',
        500: '#FC4C4E',
        600: '#FF0000'
      }
    },
    extend: {}
  },
  plugins: []
}
