import React from 'react';
import styled from 'styled-components';

const validHTags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
} as const;

const sizeConfig = {
  h1: {
    weight: 600,
    size: 48,
  },
  h2: {
    weight: 600,
    size: 36,
  },
  h3: {
    weight: 600,
    size: 28,
  },
  h4: {
    weight: 600,
    size: 24,
  },
  h5: {
    weight: 600,
    size: 18,
  },
  h6: {
    weight: 600,
    size: 16,
  },
  tittle: {
    weight: 600,
    size: 16,
  },
  h7: {
    weight: 600,
    size: 14,
  },
  h8: {
    weight: 400,
    size: 14,
  },
  h9: {
    weight: 600,
    size: 12,
  },
  h10: {
    weight: 600,
    size: 11,
  },
};

interface IProps {
  type: keyof typeof sizeConfig;
  truncated?: boolean;
}

export type HeaderProps = React.ComponentPropsWithoutRef<'h1'> & IProps;

const Header = styled.h1<IProps>`
  margin: 0;
  ${({ type }) => {
    return `
      font-weight: ${sizeConfig[type].weight};
      font-size: ${sizeConfig[type].size}px;
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
