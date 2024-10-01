import styled from '@emotion/styled';
import * as Slider from '@radix-ui/react-slider';

export const SliderRoot = styled(Slider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 100%;
  min-width: 300px;
  height: 20px;
`;

export const SliderTrack = styled(Slider.Track)`
  background-color: #ddd;
  position: relative;
  flex-grow: 1;
  height: 5px;
  border-radius: 9999px;
`;

export const SliderRange = styled(Slider.Range)`
  background-color: #0070f3;
  position: absolute;
  height: 100%;
  border-radius: 9999px;
`;

export const SliderThumb = styled(Slider.Thumb)`
  display: block;
  width: 20px;
  height: 20px;
  background-color: #0070f3;
  border-radius: 50%;
  &:hover {
    background-color: #005bb5;
  }
  &:focus {
    outline: none;
  }
`;
