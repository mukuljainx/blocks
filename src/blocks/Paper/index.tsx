import * as React from 'react';
import styled from 'styled-components';
import { ThemeType } from '../Theme';

interface IPaperProps extends React.ComponentPropsWithoutRef<'div'> {
  flex?: boolean;
  stack?: boolean;
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  height?: string | number;
  width?: string | number;
  borderRadius?: keyof ThemeType['blocks']['paper']['borderRadius'];
  gutter?: number;
  solid?: boolean;
}

const Paper = styled.div.attrs({
  'data-component': 'paper',
})<IPaperProps>`
  ${({ flex }) => flex && 'display: flex;'}
  ${({ stack }) => stack && 'display: flex; flex-direction: column;'}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
    ${({ height }) => height && `height: ${height};`}
    ${({ width }) => (width ? `width: ${width};` : 'width: 100%;')}
  ${({ borderRadius, theme }) =>
    borderRadius &&
    `border-radius: ${theme.blocks.paper.borderRadius[borderRadius]};`}
    ${({ solid, theme }) =>
    solid && `background: ${theme.blocks.paper.background};`}

  > * {
    &:not(:last-child) {
      ${({ gutter, stack }) => gutter && stack && `margin-bottom: ${gutter}px;`}
      ${({ gutter, flex }) => gutter && flex && `margin-right: ${gutter}px;`}
    }
  }
`;

export type PaperProps = IPaperProps;
export default Paper;
