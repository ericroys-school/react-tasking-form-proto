export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      blue: '#13baf2',
      black: '#000000',
      redish: '#F24B29',
      pinkish: '#CC9C93',
      gray: '#847d7b',
      greenish: '#E6F9AF',
      white: '#ffffff',
    },
    fontFamily: {
      special: ['Special Elite', 'sans-serif'],
      amatic: ['Amatic', 'sans-serif'],
    },
    extend: {
      dropShadow: {
        'custom-m-gray': [
          '0 10px 8px rgb(198 28 28 / 4%)',
          '0 4px 3px #847d7b',
        ],
        'custom-sm-blue': ['0 4px 3px rgb(19 186 242 / 4%)',
        '0 4px 3px #13baf2'
        ],
        'custom-m-black': ['-15px 10px 35px #3B413C'],
      },
    },
  },
  plugins: [],
};
