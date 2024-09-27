import styled from '@emotion/styled';
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from '@radix-ui/react-radio-group';

export const RadioRoot = styled(RadioGroup)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioItem = styled(RadioGroupItem)`
  background-color: white;
  width: 25px;
  height: 25px;
  border-radius: 100%;
`;

export const RadioIndicator = styled(RadioGroupIndicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: black;
  }
`;

export const Label = styled.label`
  font-size: 20px;
  padding-left: 15px;
`;
