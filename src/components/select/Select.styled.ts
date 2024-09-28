import styled from '@emotion/styled';
import * as Select from '@radix-ui/react-select';

export const Trigger = styled(Select.Trigger)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 13px;
  line-height: 1;
  height: 35px;
  gap: 5px;
  background-color: white;

  &:hover {
    background-color: gray;
  }
  &:focus {
    box-shadow: 0 0 0 2px black;
  }
`;

export const Content = styled(Select.Content)`
  overflow: hidden;
  background-color: white;
  border-radius: 6px;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const Viewport = styled(Select.Viewport)`
  padding: 5px;
`;

export const Item = styled(Select.Item)`
  font-size: 13px;
  line-height: 1;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
`;

export const Label = styled(Select.Label)`
  padding: 0 25px;
  font-size: 12px;
  line-height: 25px;
`;

export const ItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
