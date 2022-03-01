import * as React from "react";
import styled from "styled-components";

export interface IProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  error?: string;
}

export interface InputWrapper extends Pick<IProps, "error"> {
  isFocused?: boolean;
}

const InputWrapper = styled.div<InputWrapper>`
  display: flex;
  border: 2px solid ${(props) => props.theme.blocks.input.default.borderColor};
  border-radius: 12px;
  padding: 8px 12px;
  align-items: center;

  *:not(:last-child) {
    margin-right: 8px;
  }

  :hover,
  :focus {
    border-color: ${(props) => props.theme.blocks.input.active.borderColor};
    outline: none !important;
  }

  ${({ theme, isFocused }) =>
    isFocused && `border-color: ${theme.blocks.input.active.borderColor};`}

  ${({ theme, error }) =>
    error && `border-color: ${theme.blocks.input.error.borderColor};`}
`;

const Placeholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input<IProps>`
  border: none;
  flex-grow: 2;
  font-size: ${(props) => props.theme.blocks.input.fontSize};

  :hover,
  :focus {
    outline: none !important;
  }

  ::placeholder {
    color: ${(props) => props.theme.blocks.input.placeholderColor};
  }
`;

export type InputProps = React.ComponentPropsWithoutRef<"input"> &
  IProps &
  InputWrapper;
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { left, right, className, style, error, onFocus, onBlur, ...props },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [isInputFocused, setInputFocus] = React.useState(false);
    const handleInputFocus = (
      event: React.FocusEvent<HTMLInputElement, Element>
    ) => {
      setInputFocus(true);
      onFocus && onFocus(event);
    };
    const handleInputBlur = (
      event: React.FocusEvent<HTMLInputElement, Element>
    ) => {
      setInputFocus(false);
      onBlur && onBlur(event);
    };

    return (
      <InputWrapper
        ref={ref}
        className={className}
        style={style}
        isFocused={isInputFocused}
        error={error}
      >
        {left && <Placeholder>{left}</Placeholder>}
        <StyledInput
          ref={inputRef}
          {...props}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {right && <Placeholder>{right}</Placeholder>}
      </InputWrapper>
    );
  }
);

export default Input;
