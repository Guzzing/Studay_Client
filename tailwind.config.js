/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
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
        350: '#829EC8',
        400: '#6CAFFF',
        500: '#57A4FF',
        600: '#549EF5',
        700: '#3373EC',
        800: '#0253B3',
        900: '#0000FF',
        r100: 'rgba(165,196,232,1)',
        r200: 'rgba(158,203,255,1)',
        r300: 'rgba(147,196,255,1)',
        r400: 'rgba(108,175,255,1)',
        r500: 'rgba(87,164,255,1)',
        r600: 'rgba(84,158,245,1)',
        r700: 'rgba(51,115,236,1)',
        r800: 'rgba(2,83,179,1)',
        r900: 'rgba(0,0,255,1)'
      },
      black: {
        500: '#3D3D3D',
        700: '#33363F',
        800: '#202027',
        900: '#000000',
        r500: 'rgba(61,61,61,1)',
        r700: 'rgba(51,54,63,1)',
        r900: 'rgba(0,0,0,1)'
      },
      white: {
        0: '#FFF',
        100: '#F2F3F5',
        200: '#F4F4F4',
        r0: 'rgba(255,255,255,1)',
        r100: 'rgba(242,243,245,1)',
        r200: 'rgba(244,244,244,1)'
      },
      gray: {
        5: '#F2F2F2',
        10: '#E4E4E4',
        20: '#D4D3D3',
        30: '#C7C7C7',
        40: '#ABABAB',
        50: '#919191',
        60: '#777777',
        70: '#5F5F5F',
        80: '#333333',
        90: '#1C1C1C',
        100: '#D9D9D9',
        200: '#CACACA',
        300: '#B2b9C1',
        400: '#8F8F8F',
        500: '#8C8C8C',
        600: '#808080',
        700: '#515151',
        r100: 'rgba(217,217,217,1)',
        r200: 'rgba(202,202,202,1)',
        r300: 'rgba(178,185,193,1)',
        r400: 'rgba(143,143,143,1)',
        r500: 'rgba(140,140,140,1)',
        r600: 'rgba(128,128,128,1)',
        r700: 'rgba(81,81,81,1)'
      },
      red: {
        100: '#FFE1E1',
        200: '#F4CED0',
        300: '#FF9393',
        400: '#FF5E5E',
        500: '#FC4C4E',
        600: '#FF0000',
        r100: 'rgba(255,225,225,1)',
        r200: 'rgba(244,206,208,1)',
        r300: 'rgba(255,147,147,1)',
        r400: 'rgba(255,94,94,1)',
        r500: 'rgba(252,76,78,1)',
        r600: 'rgba(255,0,0,1)'
      },
      green: {
        5: '#E2FDF3',
        10: '#1AFFA8',
        20: '#00F598',
        30: '#00F598',
        40: '#00E58E',
        50: '#00D282',
        60: '#00C278',
        70: '#00AD6B',
        80: '#00995F',
        90: '#00804F'
      }
    },
    extend: {
      transitionProperty: {
        height: 'height'
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
}
