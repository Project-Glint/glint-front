import { Control, useController } from 'react-hook-form';
import * as S from './RadioButton.styled';

interface RadioButtonProps {
  className?: string;
  name: string;
  radioList: readonly { key: string; label: string }[];
  control: Control<any>;
}
const RadioButton = ({
  className,
  name,
  radioList,
  control,
}: RadioButtonProps) => {
  const { field } = useController({
    name,
    control,
  });

  return (
    <S.RadioRoot
      onValueChange={field.onChange}
      value={field.value}
      className={className}
      name={name}
    >
      {radioList.map((radio) => (
        <S.RadioWrapper key={radio.key}>
          <S.RadioItem value={radio.key} id={radio.key}>
            <S.RadioIndicator />
          </S.RadioItem>
          <S.Label htmlFor={radio.key}>{radio.label}</S.Label>
        </S.RadioWrapper>
      ))}
    </S.RadioRoot>
  );
};
export default RadioButton;
