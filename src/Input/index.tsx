import * as React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input``;

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<'input'>
>((props, ref) => {
  // const backgroundColor = useColorModeValue('light.primary', 'dark.primary');
  // const backgroundColorHover = useColorModeValue(
  //   'light.primary',
  //   'dark.primaryHover'
  // );
  return (
    <StyledInput
      {...props}
      className={`rounded bg- ${props.className || ''}`}
      ref={ref}
    />
  );
});

export type InputProps = React.ComponentPropsWithoutRef<'input'>;
export default Input;
