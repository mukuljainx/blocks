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
  grayScale: [
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

export const light = {
  name: 'light',
  config: {
    background: colors.grayScale[0],
  },
  colors: colors,
  blocks: {
    input: {
      fontSize: '1rem',
      color: colors.grayScale[8],
      placeholderColor: colors.grayScale[6],
      background: colors.grayScale[0],
      default: {
        borderColor: colors.grayScale[2],
      },
      active: {
        borderColor: colors.primary.skyBlue,
      },
      error: {
        borderColor: colors.secondary.red,
      },
    },
    button: {
      fontSize: '1rem',
      appearance: {
        primary: {
          background: colors.primary.blue,
          color: colors.grayScale[0],
        },
        secondary: {
          background: colors.grayScale[3],
          color: colors.grayScale[10],
        },
        alert: {
          background: colors.secondary.red,
          color: colors.grayScale[0],
        },
        success: {
          background: colors.primary.green,
          color: colors.grayScale[0],
        },
        warning: {
          background: colors.primary.yellow,
          color: colors.grayScale[0],
        },
        invert: {
          color: colors.grayScale[0],
          background: colors.grayScale[9],
        },
      },
    },
    icon: {
      size: {
        sm: '.8rem',
        rg: '1rem',
        lg: '1.2rem',
      },
    },
  },
};

export const dark: typeof light = {
  name: 'dark',
  config: {
    background: '#13131A',
  },
  colors: colors,
  blocks: {
    input: {
      fontSize: '1rem',
      background: colors.grayScale[9],
      color: colors.grayScale[1],
      placeholderColor: colors.grayScale[6],
      default: {
        borderColor: colors.grayScale[6],
      },
      active: {
        borderColor: colors.grayScale[0],
      },
      error: {
        borderColor: colors.secondary.red,
      },
    },
    button: {
      fontSize: '1rem',
      appearance: {
        primary: {
          background: colors.primary.blue,
          color: colors.grayScale[0],
        },
        secondary: {
          background: colors.grayScale[3],
          color: colors.grayScale[10],
        },
        alert: {
          background: colors.secondary.red,
          color: colors.grayScale[0],
        },
        success: {
          background: colors.primary.green,
          color: colors.grayScale[0],
        },
        warning: {
          background: colors.primary.yellow,
          color: colors.grayScale[0],
        },
        invert: {
          background: colors.grayScale[0],
          color: colors.grayScale[9],
        },
      },
    },
    icon: {
      size: {
        sm: '.8rem',
        rg: '1rem',
        lg: '1.2rem',
      },
    },
  },
};

export type ThemeType = typeof light;

export default { light, dark };
