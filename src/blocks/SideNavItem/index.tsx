import * as React from 'react';
import styled from 'styled-components';
import Paper from '../Paper';

const Wrapper = styled(Paper).attrs({
  'data-component': 'Link',
})<{ active?: boolean }>`
  display: inline-flex;
  color: ${({ theme }) => theme.blocks.link.color};
  text-decoration: none;
  cursor: pointer;
  ${({ theme, active }) => active && `color: ${theme.blocks.link.color}`};
`;

export interface SideNavItemProps
  extends React.ComponentPropsWithoutRef<'div'> {
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

const SideNavItem = ({
  href,
  title,
  icon,
  id,
  action,
  index,
  active,
  ...rest
}: SideNavItemProps) => {
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

export default SideNavItem;
