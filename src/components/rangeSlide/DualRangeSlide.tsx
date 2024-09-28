import * as S from './Slide.styled';

const DualRangeSlide = () => {
  return (
    <S.SliderRoot defaultValue={[25, 50]} max={100} step={1}>
      <S.SliderTrack>
        <S.SliderRange />
      </S.SliderTrack>
      <S.SliderThumb />
      <S.SliderThumb />
    </S.SliderRoot>
  );
};

export default DualRangeSlide;
