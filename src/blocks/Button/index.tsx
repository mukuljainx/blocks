import * as React from "react";
import styled from "styled-components";
import { ThemeType } from "../Theme";

interface WrapperProps {
  appearance?: keyof ThemeType["blocks"]["button"]["appearance"];
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.blocks.button.fontSize};

  ${({ theme, appearance }) => `
    background: ${
      theme.blocks.button.appearance[appearance || "primary"].background
    };
    color: ${theme.blocks.button.appearance[appearance || "primary"].color};
  `}

  ${({ fullWidth }) => fullWidth && `width: 100%;`}

  ${Placeholder} {
    margin-right: 8px;
  }
`;

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    WrapperProps {
  children?: string;
  left?: React.ReactNode;
}

const Button = ({ children, left, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {left && <Placeholder>{left}</Placeholder>}
      {children}
    </StyledButton>
  );
};

export default Button;
