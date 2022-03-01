import styled, { ThemeProvider } from "styled-components";
import theme from "../src/blocks/Theme";
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";

const ThemeWrapper = styled.div`
  height: 100%;
  background: ${(props) => props.theme.config.background};
  padding: 16px;
  min-height: 600px;
`;

const themes = [theme.light, theme.dark];
addDecorator(
  withThemesProvider(themes, ({ children, theme, ...props }) => {
    return (
      <ThemeProvider theme={theme}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </ThemeProvider>
    );
  })
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
