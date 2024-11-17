import * as S from './Badge.styled';

interface BadgeItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
}
interface BadgeProps {
  className?: string;
  items: BadgeItem | BadgeItem[];
  isMultiple?: boolean;
  isClickable?: boolean;
  selectedKeys?: string[];
  handleClick?: (key: string) => void;
}

const Badge = ({
  className,
  items,
  isMultiple,
  isClickable,
  selectedKeys,
  handleClick,
}: BadgeProps) => {
  const renderBadge = (item: BadgeItem) => (
    <S.Badge
      key={item.key}
      className={className}
      isSelected={selectedKeys?.includes(item.key)}
      isClickable={isClickable}
      onClick={() => isClickable && handleClick && handleClick(item.key)}
      type="button"
    >
      {item.label}
      {item.icon && item.icon}
    </S.Badge>
  );
  return (
    <S.BadgeWrapper>
      {Array.isArray(items) ? items.map(renderBadge) : renderBadge(items)}
    </S.BadgeWrapper>
  );
};

export default Badge;
