import React from 'react';
import styled from 'styled-components';
import { ThemeType } from '../Theme';

const validHTags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
} as const;

interface IProps {
  type: keyof ThemeType['blocks']['heading']['config'];
  truncated?: boolean;
}

export type HeaderProps = React.ComponentPropsWithoutRef<'h1'> & IProps;

const Header = styled.h1<IProps>`
  margin: 0;
  ${({
    type,
    theme: {
      blocks: { heading },
    },
  }) => {
    return `
      font-weight: ${heading.config[type].weight};
      font-size: ${heading.config[type].size}px;
    `;
  }}
`;

const Heading = ({ type, truncated, className, ...rest }: HeaderProps) => {
  let headerTag: keyof typeof validHTags = 'h6';

  if (validHTags[type as unknown as keyof typeof validHTags]) {
    headerTag = type as unknown as keyof typeof validHTags;
  }

  return (
    <Header
      as={headerTag}
      type={type}
      className={`${className} ${truncated ? 'truncate' : ''}`}
      {...rest}
    />
  );
};

export default Heading;
