import * as React from 'react';
import styled from 'styled-components';
import { ThemeType } from '../Theme';
import { darken } from 'polished';

interface WrapperProps {
  appearance?: keyof ThemeType['blocks']['button']['appearance'];
  fullWidth?: boolean;
}

const Placeholder = styled.div`
  height: ${(props) => props.theme.blocks.button.fontSize};
  display: flex;
  align-items: center;
`;

const StyledButton = styled.button<WrapperProps>`
  padding: 8px 16px;
  border-radius: 12px;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.blocks.button.fontSize};
  cursor: pointer;

  ${({ theme, appearance }) => `
    background: ${
      theme.blocks.button.appearance[appearance || 'primary'].background
    };
    color: ${theme.blocks.button.appearance[appearance || 'primary'].color};
  `}

  :hover {
    background: ${(props) =>
      darken(
        0.15,
        props.theme.blocks.button.appearance[props.appearance || 'primary']
          .background,
      )};
  }

  ${({ fullWidth }) => fullWidth && `width: 100%;`}
  ${Placeholder} {
    margin-right: 8px;
  }
`;

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<'button'>,
    WrapperProps {
  children?: string;
  left?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, left, ...props }, ref) => {
    return (
      <StyledButton {...props} ref={ref}>
        {left && <Placeholder>{left}</Placeholder>}
        {children}
      </StyledButton>
    );
  },
);

export default Button;
