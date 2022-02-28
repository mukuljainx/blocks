import * as React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 12px;
  border-radius: 12px;
  font-size: 14px;
  border: none;
`;

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  appearance?: "primary" | "secondary";
}

const Button = (props: ButtonProps) => {
  // const backgroundColor = useColorModeValue('light.primary', 'dark.primary');
  // const backgroundColorHover = useColorModeValue(
  // 'light.primary',
  // 'dark.primaryHover'
  // );
  return <StyledButton {...props} />;
};

export default Button;
