import * as React from "react";
import styled from "styled-components";
import { ThemeType } from "../Theme/index";
import { IconEnums } from "./IconEnums";

export interface IProps {
  size?: keyof ThemeType["blocks"]["icon"]["size"];
}
const Img = styled.img<IProps>`
  width: ${({ size, theme }) => theme.blocks.icon.size[size || "rg"]};
  height: ${({ size, theme }) => theme.blocks.icon.size[size || "rg"]};
`;

export interface IconProps
  extends Omit<React.ComponentPropsWithoutRef<"img">, "children">,
    IProps {
  name: keyof typeof IconEnums;
}

const Icon = ({ name, ...props }: IconProps) => {
  return <Img {...props} src={require(`./feather/${name}.svg`)} />;
};

export { IconEnums };
export default Icon;
