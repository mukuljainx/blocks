import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a<{ active?: boolean }>`
  display: inline-flex;
  color: ${({ theme }) => theme.blocks.link.color};
  text-decoration: none;
  cursor: pointer;
`;

export type LinkProps = React.ComponentPropsWithRef<'a'>;

const Link = (props: LinkProps) => {
  return <Wrapper {...props}></Wrapper>;
};

export default Link;
