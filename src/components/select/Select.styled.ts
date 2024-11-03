import styled from '@emotion/styled';
import * as Select from '@radix-ui/react-select';

export const Trigger = styled(Select.Trigger)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 13px;
  line-height: 1;
  height: 35px;
  background-color: white;
  border: 1px solid black;
  min-width: 200px;

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
  min-width: var(--radix-select-trigger-width);
  max-height: var(--radix-select-content-available-height);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Viewport = styled(Select.Viewport)`
  padding: 5px;
`;

export const Item = styled(Select.Item)`
  font-size: 13px;
  line-height: 1;
  color: black;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;

  &[data-highlighted] {
    outline: none;
    background-color: #f0f0f0;
  }
`;

export const Label = styled(Select.Label)`
  padding: 0 25px;
  font-size: 12px;
  line-height: 25px;
  color: #888;
`;

export const ItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
