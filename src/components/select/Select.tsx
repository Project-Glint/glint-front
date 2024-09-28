import React from 'react';
import * as Selects from '@radix-ui/react-select';

import * as S from './Select.styled';
const Select = () => {
  return (
    <Selects.Root>
      <S.Trigger>
        <Selects.Value placeholder="Select" />
        <Selects.Icon></Selects.Icon>
      </S.Trigger>

      <Selects.Portal>
        <S.Content>
          <S.Viewport>
            <Selects.Group>
              <S.Label>Fruits</S.Label>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
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
