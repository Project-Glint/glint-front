import { Button, Chip, DefaultLayout, RegionModal } from 'components';
import * as S from './MeetingRoomFilter.styled';
import { BlackXIcon, numberOfPeopleChipList, SmallWhiteXIcon } from 'assets';
import { useState } from 'react';

interface RegionType {
  name: string;
  id: number;
}

interface MeetingRoomFilterProps {
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
}

const MeetingRoomFilter = ({ setActiveFilter }: MeetingRoomFilterProps) => {
  const [regions, setRegions] = useState<RegionType[]>([]);
  // TODO: 이름 확인
  const [types, setTypes] = useState<string[]>([]);

  const handleRegionSelect =
    (fieldPrefix: 'region') =>
    (nameOrRegions: string | { name: string; id: number }[], id?: number) => {
      setRegions(nameOrRegions as { name: string; id: number }[]);
    };

  const handleFilterClose = () => {
    setActiveFilter('');
  };

  const handleRegionRemove = (id: number) => {
    const updatedRegions = regions.filter((region) => region.id !== id);
    setRegions(updatedRegions);
  };

  const handleClickChip = (key: string) => {
    const updatedValues = types.includes(key)
      ? types.filter((item) => item !== key)
      : [...types, key];

    setTypes(updatedValues);
  };

  const handleConfirm = () => {
    setActiveFilter('');
  };
  return (
    <DefaultLayout>
      <S.Header>
        미팅방 필터
        <BlackXIcon onClick={handleFilterClose} />
      </S.Header>
      <S.ContentContainer>
        <S.ContentWrapper>
          <S.Title>인원수</S.Title>
          <S.NumberOfPeopleWrapper>
            <Chip
              items={numberOfPeopleChipList}
              size="lg"
              selectedKeys={types}
              handleClick={handleClickChip}
            />
          </S.NumberOfPeopleWrapper>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <S.Title>미팅 희망 지역</S.Title>
          <RegionModal
            name="regionName"
            buttonName="선택하기"
            title="지역을 선택해 주세요"
            onSelect={handleRegionSelect('region')}
            isMultiple
          />
          <S.SelectedRegionsWrapper>
            {regions &&
              regions.map((region) => (
                <Chip
                  items={{ key: region.name, label: region.name }}
                  size="lg"
                  key={region.id}
                  icon={<SmallWhiteXIcon />}
                  handleClick={() => handleRegionRemove(region.id)}
                  selectedKeys={regions.map((region) => region.name)}
                />
              ))}
          </S.SelectedRegionsWrapper>
        </S.ContentWrapper>
      </S.ContentContainer>
      <S.Footer>
        <Button size="lg" onClick={handleConfirm}>
          적용하기
        </Button>
      </S.Footer>
    </DefaultLayout>
  );
};

export default MeetingRoomFilter;
