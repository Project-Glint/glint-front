import React from 'react';

import * as S from './Input.styled';

interface InputProps {
  className?: string;
  type?: 'text';
  value?: string;
  maxLength?: number;
  placeholder?: string;
  disabled?: boolean;
  autoComplete?: 'on' | 'off';
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
      type,
      value,
      maxLength,
      placeholder,
      disabled,
      autoComplete,
      hasError,
      handleFocus,
      handleBlur,
      handleChange,
      handleKeyDown,
    }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement | null>
  ) => {
    return (
      <S.Input
        className={className}
        ref={ref}
        type={type}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={autoComplete}
        hasError={hasError}
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
