import * as React from 'react';
import styled from 'styled-components';
import Paper from '../../blocks/Paper';

const Wrapper = styled(Paper).attrs({
  'data-component': 'Link',
})<{ active?: boolean }>`
  display: inline-flex;
  color: ${({ theme }) => theme.blocks.link.color};
  text-decoration: none;
  cursor: pointer;
  ${({ theme, active }) => active && `color: ${theme.blocks.link.hover.color}`};
  &:hover {
    color: ${({ theme }) => theme.blocks.link.hover.color};
  }
`;

export interface LinkProps extends React.ComponentPropsWithoutRef<'div'> {
  icon?: React.ReactNode;
  title: string;
  href?: string;
  id: string;
  action?: (
    event: React.SyntheticEvent,
    data: { id: string; index?: number },
  ) => void;
  index?: number;
  active?: boolean;
}

const Link = ({
  href,
  title,
  icon,
  id,
  action,
  index,
  active,
  ...rest
}: LinkProps) => {
  return (
    <Wrapper
      active={active}
      flex
      alignItems="center"
      gutter={12}
      href={href}
      as={href ? 'a' : 'div'}
      onClick={(event: React.MouseEvent) => {
        action &&
          action(event, { id, index: index === undefined ? -1 : index });
      }}
      {...rest}
    >
      {icon}
      <span>{title}</span>
    </Wrapper>
  );
};

export default Link;
