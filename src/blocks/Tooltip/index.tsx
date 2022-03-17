import * as React from 'react';
import styled from 'styled-components';
import Popover, { PopoverProps } from '../Popover';

const TooltipWrapper = styled.div`
  background: ${(props) => props.theme.blocks.tooltip.background};
  color: ${(props) => props.theme.blocks.tooltip.color};
  border-radius: 8px;
  padding: 12px 16px;
  max-width: ${(props) => props.theme.blocks.tooltip.maxWidth};
`;

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  direction?: PopoverProps['direction'];
  padding?: number;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  direction,
  padding,
}) => {
  return (
    <Popover
      on="click"
      align="center"
      direction={direction}
      popover={<TooltipWrapper>{content}</TooltipWrapper>}
      padding={padding || 8}
    >
      {children}
    </Popover>
  );
};

export default Tooltip;
