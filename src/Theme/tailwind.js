const colors = {
  primary: {
    blue: '#0062FF',
    yellow: '#FFC542',
    skyBlue: '#50B5FF',
    green: '#3DD598',
  },
  secondary: {
    orange: '#FF974A',
    red: '#FC5A5A',
    green: '#82C43C',
    purple: '#A461D8',
    pink: '#FF9AD5',
  },
  blackScale: [
    '#FFFFFF',
    '#FAFAFB',
    '#F1F1F5',
    '#E2E2EA',
    '#D5D5DC',
    '#B5B5BE',
    '#92929D',
    '#696974',
    '#44444F',
    '#171725',
    '#000000',
  ],
};

module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
  theme: {
    colors,
    extend: {
      spacing: {
        px: '1px',
        0: 0,
        1: '1px',
        2: '2px',
        3: '4px',
        5: '8px',
        6: '12px',
        7: '16px',
        8: '24px',
        9: '32px',
        10: '48px',
        11: '64px',
        12: '96px',
      },
      borderRadius: {
        md: '8px',
        lg: '16px',
        full: '50%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
