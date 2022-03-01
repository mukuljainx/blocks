const colors = {
  primary: {
    blue: "#0062FF",
    yellow: "#FFC542",
    skyBlue: "#50B5FF",
    green: "#3DD598",
  },
  secondary: {
    orange: "#FF974A",
    red: "#FC5A5A",
    green: "#82C43C",
    purple: "#A461D8",
    pink: "#FF9AD5",
  },
  grayScale: [
    "#FFFFFF",
    "#FAFAFB",
    "#F1F1F5",
    "#E2E2EA",
    "#D5D5DC",
    "#B5B5BE",
    "#92929D",
    "#696974",
    "#44444F",
    "#171725",
    "#000000",
  ],
};

export const light = {
  name: "light",
  colors: colors,
  blocks: {
    input: {
      fontSize: "1rem",
      color: colors.grayScale[8],
      placeholderColor: colors.grayScale[6],
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
    button: {},
    icon: {
      size: {
        sm: ".8rem",
        rg: "1rem",
        lg: "1.2rem",
      },
    },
  },
};

export const dark: typeof light = {
  name: "dark",
  colors: colors,
  blocks: {
    input: {
      fontSize: "1rem",
      color: colors.grayScale[1],
      placeholderColor: colors.grayScale[6],
      default: {
        borderColor: "rgba(0, 0, 0, 0)",
      },
      active: {
        borderColor: colors.grayScale[0],
      },
      error: {
        borderColor: colors.secondary.red,
      },
    },
    button: {},
    icon: {
      size: {
        sm: ".8rem",
        rg: "1rem",
        lg: "1.2rem",
      },
    },
  },
};

export type ThemeType = typeof light;

export default { light, dark };
