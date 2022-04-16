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
    '#FFFFFF', // 0
    '#FAFAFB', // 1
    '#F1F1F5', // 2
    '#E2E2EA', // 3
    '#D5D5DC', // 4
    '#B5B5BE', // 5
    '#92929D', // 6
    '#696974', // 7
    '#44444F', // 8
    '#171725', // 9
    '#000000', // 10
  ],
};

export const light = {
  name: 'light',
  config: {
    background: colors.grayScale[0],
  },
  colors: colors,
  blocks: {
    text: {
      weight: {
        bold: 700,
        regular: 400,
        medium: 500,
        light: 300,
      },
      size: {
        sm: 12,
        rg: 14,
        md: 16,
        lg: 18,
      },
    },
    heading: {
      config: {
        h1: {
          weight: 600,
          size: 48,
        },
        h2: {
          weight: 600,
          size: 36,
        },
        h3: {
          weight: 600,
          size: 28,
        },
        h4: {
          weight: 600,
          size: 24,
        },
        h5: {
          weight: 600,
          size: 18,
        },
        h6: {
          weight: 600,
          size: 16,
        },
        tittle: {
          weight: 600,
          size: 16,
        },
        h7: {
          weight: 600,
          size: 14,
        },
        h8: {
          weight: 400,
          size: 14,
        },
        h9: {
          weight: 600,
          size: 12,
        },
        h10: {
          weight: 600,
          size: 11,
        },
      },
    },

    link: {
      color: colors.grayScale[10],
      hover: {
        color: colors.primary.blue,
      },
    },
    paper: {
      background: colors.grayScale[0],
      borderRadius: {
        small: '4px',
        medium: '8px',
        large: '12px',
      },
    },
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
    tooltip: {
      color: colors.grayScale[0],
      background: colors.grayScale[7],
      maxWidth: '320px',
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
    text: light.blocks.text,
    heading: light.blocks.heading,
    link: {
      color: colors.grayScale[0],
      hover: {
        color: colors.primary.blue,
      },
    },
    paper: {
      background: '#1C1C24',
      borderRadius: {
        small: '4px',
        medium: '8px',
        large: '12px',
      },
    },
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
    tooltip: {
      color: colors.grayScale[0],
      background: colors.grayScale[7],
      maxWidth: '320px',
    },
  },
};

export type ThemeType = typeof light;

export default { light, dark };
