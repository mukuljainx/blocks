import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { light as defaultLight, ThemeType, dark as defaultDark } from './index';
import useSystemThemeDetector from './useSystemThemeDetector';

interface IProps {
  theme?: ThemeType;
  light?: ThemeType;
  dark?: ThemeType;
  useSystemTheme?: boolean;
}

const BlockThemeProvider: React.FC<IProps> = ({
  theme = defaultLight,
  children,
  light = defaultLight,
  dark = defaultDark,
  useSystemTheme,
}) => {
  const themeType = useSystemThemeDetector();
  const currentTheme = useSystemTheme
    ? themeType === 'DARK'
      ? dark
      : light
    : theme;
  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

export default BlockThemeProvider;
