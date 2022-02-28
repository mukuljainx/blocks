import * as React from "react";
import styled from "styled-components";

interface IPaperProps extends React.ComponentPropsWithoutRef<"div"> {
  flex?: boolean;
  stack?: boolean;
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  height?: string | number;
  width?: string | number;
  solid?: boolean;
}

const Paper = styled.div.attrs({
  "data-component": "paper",
})<IPaperProps>`
  ${({ flex }) => flex && "display: flex;"}
  ${({ stack }) => stack && "display: flex; flex-direction: column;"}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
    ${({ height }) => height && `height: ${height};`}
    ${({ width }) => (width ? `width: ${width};` : "width: 100%;")}
    ${({ solid }) => (solid ? "border-radius: 0;" : "border-radius: 4px;")}
`;

export type PaperProps = IPaperProps;
export default Paper;
