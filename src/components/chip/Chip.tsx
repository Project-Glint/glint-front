import * as S from './Chip.styled';

interface ChipItem {
  key: string;
  label: string;
}

interface ChipProps {
  className?: string;
  items: ChipItem | ChipItem[];
  selectedKeys?: string[];
  handleClick?: (key: string) => void;
  size: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

const Chip = ({
  className,
  items,
  selectedKeys,
  handleClick,
  size,
  icon,
}: ChipProps) => {
  const renderChip = (item: ChipItem) => (
    <S.Chip
      className={className}
      key={item.key}
      isSelected={selectedKeys?.includes(item.key)}
      icon={!!icon}
      size={size}
      onClick={!icon && handleClick ? () => handleClick(item.key) : undefined}
      type="button"
    >
      {item.label}
      {icon && (
        <S.Icon
          onClick={
            handleClick
              ? (e) => {
                  e.stopPropagation();
                  handleClick(item.key);
                }
              : undefined
          }
        >
          {icon}
        </S.Icon>
      )}
    </S.Chip>
  );
  return (
    <S.ChipWrapper>
      {Array.isArray(items) ? items.map(renderChip) : renderChip(items)}
    </S.ChipWrapper>
  );
};

export default Chip;
