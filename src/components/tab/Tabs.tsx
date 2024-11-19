import * as S from './Tabs.styled';

interface TabsProps {
  tabList: readonly { key: string; label: string }[];
}
const Tabs = ({ tabList }: TabsProps) => {
  return (
    <S.TabsRoot defaultValue={tabList[0].key}>
      <S.TabsList>
        {tabList.map((tab) => (
          <S.TabsTrigger key={tab.key} value={tab.key}>
            {tab.label}
          </S.TabsTrigger>
        ))}
      </S.TabsList>
    </S.TabsRoot>
  );
};

export default Tabs;
