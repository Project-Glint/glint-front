import React from 'react';

import * as S from './Input.styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  hasError?: boolean;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef(
  (
    {
      className,
      hasError,
      handleFocus,
      handleBlur,
      handleChange,
      handleKeyDown,
      ...rest
    }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement | null>
  ) => {
    return (
      <S.Input
        className={className}
        ref={ref}
        hasError={hasError}
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        {...rest}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
