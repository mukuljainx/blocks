import * as React from 'react';
import styled from 'styled-components';
import Paper, { PaperProps } from '../Paper';
import SideNavItem, { SideNavItemProps } from '../SideNavItem';

const Wrapper = styled(Paper)`
  padding: 12px 16px;
`;

export interface SideNavProps
  extends React.ComponentPropsWithoutRef<'div'>,
    PaperProps {
  items: Array<SideNavItemProps>;
  gap?: number;
  activeItem?: string;
  onItemClick?: SideNavItemProps['action'];
}

const SideNav = ({
  items,
  gap,
  activeItem,
  onItemClick,
  ...rest
}: SideNavProps) => {
  return (
    <Wrapper
      stack
      solid
      borderRadius="large"
      {...rest}
      data-component="sideNav"
    >
      {items.map((item, index) => (
        <SideNavItem
          active={item.id === activeItem}
          {...item}
          key={item.id}
          index={index}
          style={{ margin: `${gap || 12}px 0` }}
          action={onItemClick}
        />
      ))}
    </Wrapper>
  );
};

export default SideNav;
