// 'use client';
import { buttonVariant } from 'types';
import * as S from './Button.styled';
import { SerializedStyles } from '@emotion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: buttonVariant;
  handleClick?: () => void;
  css?: SerializedStyles;
}

const Button = ({ children, variant, handleClick, ...rest }: ButtonProps) => {
  return (
    <S.Button variant={variant} onClick={handleClick} {...rest}>
      {children}
    </S.Button>
  );
};

export default Button;
