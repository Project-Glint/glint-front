import { SerializedStyles } from '@emotion/react';
import { Control, Controller } from 'react-hook-form';
import * as S from './Checkbox.styled';
import { CheckCircleIcon } from 'assets';

interface CheckboxProps {
  name: string;
  control: Control<any>;
  checkboxList: readonly { key: string; label: string }[];
  css?: SerializedStyles;
}

const CheckBox = ({ name, control, css, checkboxList }: CheckboxProps) => {
  return (
    <>
      {checkboxList.map((option) => (
        <Controller
          key={option.key}
          name={name}
          control={control}
          render={({ field }) => {
            const selectedValues = Array.isArray(field.value)
              ? field.value
              : [];

            const isChecked = selectedValues.includes(option.key);

            return (
              <S.CheckboxRoot
                checked={isChecked}
                onCheckedChange={(checked) => {
                  const updatedValues = checked
                    ? [...selectedValues, option.key]
                    : selectedValues.filter((v: string) => v !== option.key);

                  field.onChange(updatedValues);
                }}
                css={css}
              >
                <CheckCircleIcon />
              </S.CheckboxRoot>
            );
          }}
        ></Controller>
      ))}
    </>
  );
};

export default CheckBox;
