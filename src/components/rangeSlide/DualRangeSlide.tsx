import {
  SliderRoot,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from './Slide.styled';

const DualRangeSlide = () => {
  return (
    <SliderRoot defaultValue={[25, 50]} max={100} step={1}>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb />
      <SliderThumb />
    </SliderRoot>
  );
};

export default DualRangeSlide;
