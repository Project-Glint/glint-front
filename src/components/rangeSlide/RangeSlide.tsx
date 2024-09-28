import {
  SliderRoot,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from './Slide.styled';

const RangeSlide = () => {
  return (
    <SliderRoot defaultValue={[50]} max={100} step={1}>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb />
    </SliderRoot>
  );
};

export default RangeSlide;
