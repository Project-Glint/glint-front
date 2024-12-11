// 'use client';
import { buttonColor, buttonSize, buttonVariant } from 'types';
import * as S from './Button.styled';
import { SerializedStyles } from '@emotion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: buttonVariant;
  outline?: boolean;
  size?: buttonSize;
  color?: buttonColor;
  handleClick?: () => void;
  css?: SerializedStyles;
  className?: string;
}

const Button = ({
  children,
  variant = 'default',
  outline,
  size,
  color = 'primary',
  handleClick,
  css,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <S.Button
      variant={variant}
      outline={outline}
      size={size}
      color={color}
      onClick={handleClick}
      css={css}
      className={className}
      {...rest}
    >
      {children}
    </S.Button>
  );
};

export default Button;
