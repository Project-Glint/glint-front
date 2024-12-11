import * as S from './Badge.styled';

interface BadgeProps {
  label?: string | number;
  type: 'NEW' | 'NUMBER' | 'DOT' | 'CONTENT';
  size?: 'md' | 'lg';
  outline?: boolean;
  color?: 'RED' | 'PRIMARY' | 'LIGHT_PRIMARY' | 'LIGHT_MONO' | 'MONO'; // PRIMARY = Indigo, Brand (default)
}

const Badge = ({ label, type, size, outline, color }: BadgeProps) => {
  return (
    <>
      {type !== 'CONTENT' ? (
        <S.Circle type={type} color={color}>
          {type === 'NEW' ? 'N' : label}
        </S.Circle>
      ) : (
        <S.Badge size={size} outline={outline} color={color}>
          {label}
        </S.Badge>
      )}
    </>
  );
};

export default Badge;
