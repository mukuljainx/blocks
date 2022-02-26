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
  blackScale: [
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

const theme = {
  colors: colors,
};

export type ThemeType = typeof theme;

export default theme;
