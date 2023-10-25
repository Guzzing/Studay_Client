/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // TODO : font-nsk로 바로 폰트 사용가능합니다!
        nsk: ['Noto Sans KR', 'cursive'],
      },
    },
  },
  plugins: [],
}
