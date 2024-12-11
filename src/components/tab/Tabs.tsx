import * as S from './Tabs.styled';

interface TabsProps {
  tabList: readonly { key: string; label: string }[];
  onChange?: (key: string) => void;
  type?: 'primary' | 'outline';
}
const Tabs = ({ tabList, onChange, type = 'primary' }: TabsProps) => {
  return (
    <S.TabsRoot
      defaultValue={tabList[0].key}
      onValueChange={(value) => onChange?.(value)}
    >
      <S.TabsList type={type}>
        {tabList.map((tab) => (
          <S.TabsTrigger triggerType={type} key={tab.key} value={tab.key}>
            {tab.label}
          </S.TabsTrigger>
        ))}
      </S.TabsList>
    </S.TabsRoot>
  );
};

export default Tabs;
