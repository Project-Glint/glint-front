// 'use client';
import { buttonVariant } from 'types';
import * as S from './Button.styled';

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: buttonVariant;
  disabled?: boolean;
  handleClick?: () => void;
}

const Button = ({
  className,
  children,
  variant,
  disabled,
  handleClick,
}: ButtonProps) => {
  return (
    <S.Button
      className={className}
      variant={variant}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </S.Button>
  );
};

export default Button;
