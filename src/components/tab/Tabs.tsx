import * as S from './Tabs.styled';

interface TabsProps {
  className?: string;
  tabList: readonly { key: string; label: string }[];
}
const Tabs = ({ className, tabList }: TabsProps) => {
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
