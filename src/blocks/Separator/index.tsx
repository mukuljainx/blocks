import * as React from 'react';
import styled from 'styled-components';
import Paper from '../Paper';

export type SeparatorProps = React.ComponentPropsWithRef<'div'>;

const Hr = styled.div`
  flex-grow: 2;
  height: 1px;
  background: ${({ theme }) => theme.blocks.separator.color};
`;

const Children = styled.div`
  flex-shrink: 0;
  margin: 0 4px;
`;

const Separator = (props: SeparatorProps) => {
  const { children, className, ...rest } = props;
  if (children) {
    return (
      <Paper {...props} className={className} flex alignItems="center">
        <Hr />
        <Children>{children}</Children>
        <Hr />
      </Paper>
    );
  }
  return <Hr {...rest} />;
};

export default Separator;
