import styled from '@emotion/styled';
import * as Switch from '@radix-ui/react-switch';

export const SwitchRoot = styled(Switch.Root)`
  all: unset;
  width: 42px;
  height: 25px;
  background-color: #000000b3;
  border-radius: 9999px;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const SwitchThumb = styled(Switch.Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  background-color: white;
  border-radius: 9999px;
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;
  &[data-state='checked'] {
    transform: translateX(19px);
  }
`;
