import React, { useState } from 'react';
import * as S from './Textarea.styled';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  showCharacterCount?: boolean;
  maxLength?: number;
  helperText?: string;
  hasError?: boolean;
  value?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      handleChange,
      handleFocus,
      handleBlur,
      showCharacterCount = false,
      maxLength,
      helperText,
      hasError,
      value = '',
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    console.log(isFocused);
    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      handleChange?.(e);
    };

    const onFocusHandler = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      handleFocus?.(e);
    };

    const onBlurHandler = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      handleBlur?.(e);
    };

    return (
      <>
        <S.TextareaWrapper isFocused={isFocused} hasError={hasError}>
          <S.Textarea
            {...rest}
            className={className}
            ref={ref}
            isFocused={isFocused}
            maxLength={maxLength}
            onChange={onChangeHandler}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            value={value}
            hasError={hasError}
          />
          {showCharacterCount && maxLength && (
            <S.CharacterCount>
              {value.length} / {maxLength}
            </S.CharacterCount>
          )}
        </S.TextareaWrapper>
        {helperText && (
          <S.HelperText hasError={hasError}>{helperText}</S.HelperText>
        )}
      </>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
