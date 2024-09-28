import * as S from './Slide.styled';

const RangeSlide = () => {
  return (
    <S.SliderRoot defaultValue={[50]} max={100} step={1}>
      <S.SliderTrack>
        <S.SliderRange />
      </S.SliderTrack>
      <S.SliderThumb />
    </S.SliderRoot>
  );
};

export default RangeSlide;
