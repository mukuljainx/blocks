import React from 'react';
import styled from 'styled-components';
import { ThemeType } from '../Theme';

type IProps = {
  weight?: keyof ThemeType['blocks']['text']['weight'];
  truncated?: boolean;
  size?: keyof ThemeType['blocks']['text']['size'];
  className?: string;
};
const StyledText = styled.p<IProps>`
  margin: 0;
  ${({
    weight,
    size,
    theme: {
      blocks: { text },
    },
  }) => {
    return `
    font-weight: ${text.weight[weight || 'regular']};
    font-size: ${text.size[size || 'rg']}px;
    `;
  }}
`;

export type TextProps = React.ComponentPropsWithoutRef<'p'> & IProps;

const Text = ({ weight, size, truncated, className, ...rest }: TextProps) => {
  return (
    <StyledText
      weight={weight}
      size={size}
      className={`${className} ${truncated ? 'truncate' : ''}`}
      {...rest}
    />
  );
};

export default Text;
