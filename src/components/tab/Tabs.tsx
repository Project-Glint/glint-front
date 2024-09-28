import * as S from './Tabs.styled';

const Tabs = () => {
  return (
    <S.TabsRoot>
      <S.TabsList>
        <S.TabsTrigger value="dog">Dog</S.TabsTrigger>
        <S.TabsTrigger value="cat">Cat</S.TabsTrigger>
      </S.TabsList>
    </S.TabsRoot>
  );
};

export default Tabs;
