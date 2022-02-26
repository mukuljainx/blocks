import * as React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button``;

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

const Button = (props: ButtonProps) => {
  // const backgroundColor = useColorModeValue('light.primary', 'dark.primary');
  // const backgroundColorHover = useColorModeValue(
  // 'light.primary',
  // 'dark.primaryHover'
  // );
  return <StyledButton {...props} />;
};

export default Button;
