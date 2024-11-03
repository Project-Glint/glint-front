import React from 'react';
import * as S from './Textarea.styled';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

const Textarea = React.forwardRef(
  (
    {
      className,
      handleChange,
      handleFocus,
      handleBlur,
      ...rest
    }: TextareaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement | null>
  ) => {
    return (
      <S.Textarea
        className={className}
        ref={ref}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
