import React from 'react';
import * as Selects from '@radix-ui/react-select';
import { Control, useController } from 'react-hook-form';
import * as S from './Select.styled';

interface SelectProps {
  control: Control<any>;
  name: string;
  placeholder?: string;
  selectList: readonly { key: string; label: string }[];
}

const Select = ({ control, name, placeholder, selectList }: SelectProps) => {
  const { field } = useController({ name, control });
  return (
    <Selects.Root onValueChange={field.onChange} value={field.value}>
      <S.Trigger>
        <Selects.Value placeholder={placeholder} />
        <Selects.Icon></Selects.Icon>
      </S.Trigger>

      <Selects.Portal>
        <S.Content position="popper" sideOffset={0} align="start">
          <S.Viewport>
            <Selects.Group>
              <S.Label>Fruits</S.Label>
              {selectList.map((item) => (
                <SelectItem value={item.key} key={item.key}>
                  {item.label}
                </SelectItem>
              ))}
            </Selects.Group>
          </S.Viewport>
        </S.Content>
      </Selects.Portal>
    </Selects.Root>
  );
};

interface SelectItemProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}
const SelectItem = React.forwardRef(
  (
    { children, className, value, ...props }: SelectItemProps,
    ref: React.ForwardedRef<HTMLDivElement | null>
  ) => {
    return (
      <S.Item className={className} {...props} ref={ref} value={value}>
        <Selects.ItemText>{children}</Selects.ItemText>
        <S.ItemIndicator>V</S.ItemIndicator>
      </S.Item>
    );
  }
);

SelectItem.displayName = 'SelectItem';

export default Select;
