import * as S from './RadioButton.styled';

const RadioButton = () => {
  return (
    <form>
      <S.RadioRoot defaultValue="1">
        <S.RadioWrapper>
          <S.RadioItem value="1" id="r1">
            <S.RadioIndicator />
          </S.RadioItem>
          <S.Label htmlFor="r1">1</S.Label>
        </S.RadioWrapper>
        <S.RadioWrapper>
          <S.RadioItem value="2" id="r2">
            <S.RadioIndicator />
          </S.RadioItem>
          <S.Label htmlFor="r2">2</S.Label>
        </S.RadioWrapper>
      </S.RadioRoot>
    </form>
  );
};
export default RadioButton;
