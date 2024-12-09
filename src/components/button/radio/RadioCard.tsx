import { Control, useController } from 'react-hook-form';
import * as S from './RadioCard.styled';

interface RadioProps {
  name: string;
  control: Control<any>;
  radioList: { key: string; label: string; desc?: string }[];
  isOpen: boolean;
  openKey?: string;
  openChildren?: React.ReactNode;
}
const RadioCard = ({
  name,
  control,
  radioList,
  isOpen,
  openKey,
  openChildren,
}: RadioProps) => {
  const { field } = useController({ name, control });

  const isSelected = (key: string) => {
    return key === field.value;
  };
  return (
    <>
      <S.RadioRoot
        onValueChange={field.onChange}
        value={field.value}
        name={name}
      >
        {radioList.map((radio) => (
          <>
            <S.CardWrapper key={radio.key} isSelected={isSelected(radio.key)}>
              <S.CardContentWrapper>
                <S.CardTitle>{radio.label}</S.CardTitle>
                <S.CardDescription>{radio.desc}</S.CardDescription>
              </S.CardContentWrapper>
              <S.RadioItem value={radio.key} id={radio.key}>
                <S.RadioIndicator forceMount />
              </S.RadioItem>
            </S.CardWrapper>
            {isOpen &&
              field.value === openKey &&
              radio.key === openKey &&
              openChildren}
          </>
        ))}
      </S.RadioRoot>
    </>
  );
};

export default RadioCard;
