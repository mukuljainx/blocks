import * as React from 'react';
import styled from 'styled-components';
import Text from '../Text';
import { ThemeType } from '../Theme';
import { transparentize } from 'polished';

export interface WrapperProps {
  appearance?: keyof ThemeType['blocks']['status']['config'];
}

const StatusWrapper = styled.div<WrapperProps>`
  display: inline-flex;
  ${({
    theme: {
      blocks: {
        status: { config, borderRadius, padding },
      },
    },
    appearance = 'primary',
  }) =>
    `
      padding: ${padding};
      border-radius: ${borderRadius};
      color: ${config[appearance].color}; 
      background: ${transparentize(0.9, config[appearance].color)};
    `};
`;

export type StatusProps = React.ComponentPropsWithoutRef<'div'> & WrapperProps;

const Status: React.FC<StatusProps> = ({ children, ...rest }) => {
  return (
    <StatusWrapper {...rest}>
      <Text as="span" size="sm">
        {children}
      </Text>
    </StatusWrapper>
  );
};

export default Status;
