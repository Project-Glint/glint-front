import { BottomBaseModal, Button, Chip, RadioButton } from 'components';
import * as S from './ConditionFilter.styled';
import * as Dialog from '@radix-ui/react-dialog';
import { CaretDownIcon, numberOfPeopleRadioList } from 'assets';
import { Control } from 'react-hook-form';

interface ConditionFilterProps {
  control: Control<any>;
}

const ConditionFilter = ({ control }: ConditionFilterProps) => {
  return (
    <BottomBaseModal
      title="조건 만족수 필터"
      buttonChildren={
        <Chip
          size="md"
          items={{ key: 'condition', label: '조건 만족수' }}
          icon={<CaretDownIcon />}
        />
      }
    >
      <S.FilterWrapper>
        <S.Title>인원수</S.Title>
        <RadioButton
          name="numberOfPeople"
          radioList={numberOfPeopleRadioList}
          control={control}
          css={S.radioButton}
        />
      </S.FilterWrapper>

      <Dialog.Close asChild>
        <S.ConfirmButton>
          <Button size="lg">적용하기</Button>
        </S.ConfirmButton>
      </Dialog.Close>
    </BottomBaseModal>
  );
};

export default ConditionFilter;
