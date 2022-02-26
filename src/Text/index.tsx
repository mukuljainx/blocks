import React from "react";
import styled from "styled-components";

const weightConfig = {
  bold: 700,
  regular: 400,
  medium: 500,
  light: 300,
};

const sizeConfig = {
  sm: 12,
  rg: 14,
  md: 16,
  lg: 18,
};

type IProps = {
  weight?: keyof typeof weightConfig;
  truncated?: boolean;
  size?: keyof typeof sizeConfig;
  className?: string;
};
const StyledText = styled.p<IProps>`
  margin: 0;
  ${({ weight, size }) => {
    return `
    font-weight: ${weightConfig[weight || "regular"]};
    font-size: ${sizeConfig[size || "rg"]}px;
    `;
  }}
`;

export type TextProps = React.ComponentPropsWithoutRef<"p"> & IProps;

const Text = ({ weight, size, truncated, className, ...rest }: TextProps) => {
  return (
    <StyledText
      weight={weight}
      size={size}
      className={`${className} ${truncated ? "truncate" : ""}`}
      {...rest}
    />
  );
};

export default Text;
