import { Control, useController } from 'react-hook-form';
import * as S from './RadioButton.styled';
import { SerializedStyles } from '@emotion/react';

interface RadioButtonProps {
  className?: string;
  name: string;
  radioList: readonly { key: string; label: string }[];
  control: Control<any>;
  css?: SerializedStyles;
}
const RadioButton = ({
  className,
  name,
  radioList,
  control,
  css,
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
      css={css}
    >
      {radioList.map((radio) => (
        <S.RadioWrapper key={radio.key}>
          <S.RadioItemWrapper>
            <S.Label htmlFor={radio.key}>{radio.label}</S.Label>
            <S.RadioItem value={radio.key} id={radio.key}>
              <S.RadioIndicator forceMount />
            </S.RadioItem>
          </S.RadioItemWrapper>
        </S.RadioWrapper>
      ))}
    </S.RadioRoot>
  );
};
export default RadioButton;
