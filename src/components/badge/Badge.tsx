import { badgeVariant } from 'types';
import * as S from './Badge.styled';

interface BadgeProps {
  className?: string;
  label: string;
  variant?: badgeVariant;
  icon?: React.ReactNode;
  isSelected?: boolean;
  handleClick?: (e: React.MouseEvent) => void;
}

const Badge = ({
  className,
  label,
  variant,
  icon,
  isSelected,
  handleClick,
}: BadgeProps) => {
  return (
    <S.Badge
      className={className}
      variant={variant}
      isSelected={isSelected}
      isClickable={!!handleClick}
      onClick={handleClick}
    >
      {label}
      {icon && icon}
    </S.Badge>
  );
};

export default Badge;
