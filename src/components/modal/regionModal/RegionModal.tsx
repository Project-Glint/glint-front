import { BottomBaseModal } from '../baseModal';
import * as S from './RegionModal.styled';
import { useGetRegionCity, useGetRegionState } from 'hooks';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button, SelectButton } from 'components/button';
import { Chip } from 'components/chip';
import { CheckCircleIcon, SmallBlackXIcon } from 'assets';

interface RegionModalProps {
  buttonName?: string;
  title?: string;
  name: string;
  isMultiple?: boolean;
  onSelect:
    | ((name: string, id: number) => void) // 단일 선택
    | ((regions: { name: string; id: number }[]) => void); // 다중 선택
  initialValue?: { name: string; id: number }[] | string;
}
const RegionModal = ({
  buttonName,
  title,
  onSelect,
  isMultiple = false,
  initialValue,
}: RegionModalProps) => {
  const [stateId, setStateId] = useState<number>(1);
  const [cityId, setCityId] = useState<number>();
  const { data: states } = useGetRegionState();
  const { data: cities } = useGetRegionCity(stateId);
  const [selectedRegions, setSelectedRegions] = useState<
    { name: string; id: number }[] | string
  >(initialValue || (isMultiple ? [] : ''));

  useEffect(() => {
    if (cities) {
      setCityId(cities?.data[0]?.regionId);
    }
  }, [stateId, cities]);

  useEffect(() => {
    if (initialValue) {
      setSelectedRegions(initialValue);
    } else if (isMultiple && initialValue === undefined) {
      setSelectedRegions([]);
    }
  }, [initialValue, isMultiple]);

  const handleRegionSelect = (name: string, id: number) => {
    if (isMultiple) {
      if (Array.isArray(selectedRegions)) {
        const alreadySelect = selectedRegions.some(
          (region) => region.id === id
        );
        if (!alreadySelect) {
          const updatedRegions = [...selectedRegions, { name, id }];
          setSelectedRegions(updatedRegions);
          (onSelect as (regions: { name: string; id: number }[]) => void)(
            updatedRegions
          );
        }
      }
    } else {
      setSelectedRegions([{ name, id }]);
      (onSelect as (name: string, id: number) => void)(name, id);
    }
  };

  const handleRegionRemove = (id: number) => {
    if (Array.isArray(selectedRegions)) {
      const updatedRegions = selectedRegions.filter(
        (region) => region.id !== id
      );
      setSelectedRegions(updatedRegions);
      (onSelect as (regions: { name: string; id: number }[]) => void)(
        updatedRegions
      );
    }
  };

  return (
    <BottomBaseModal
      title={title}
      buttonChildren={
        <SelectButton
          selectValue={selectedRegions}
          buttonName={buttonName}
          isMultiple={isMultiple}
        />
      }
    >
      <S.RegionContainer>
        <S.RegionTitleWrapper>
          <div>시/도</div>
          <div>시/군/구</div>
        </S.RegionTitleWrapper>

        {isMultiple ? (
          <>
            <S.RegionListWrapper isMultiple={isMultiple}>
              <S.StateList>
                {states?.data?.map((item) => (
                  <S.RegionItem
                    key={item.regionId}
                    onClick={() => setStateId(item.regionId)}
                    isSelected={item.regionId === stateId}
                  >
                    {item.name}
                  </S.RegionItem>
                ))}
              </S.StateList>
              <S.CityList>
                {cities?.data?.map((item) => (
                  <S.RegionItem
                    key={item.regionId}
                    onClick={() => {
                      setCityId(item.regionId);
                      handleRegionSelect(
                        item.parentName + ' ' + item.name,
                        item.regionId
                      );
                    }}
                    isSelected={
                      Array.isArray(selectedRegions) &&
                      selectedRegions.some(
                        (region) => region.id === item.regionId
                      )
                    }
                  >
                    {item.parentName + ' ' + item.name}
                    <CheckCircleIcon />
                  </S.RegionItem>
                ))}
              </S.CityList>
              <S.SelectedRegionsWrapper>
                {Array.isArray(selectedRegions) &&
                  selectedRegions.map((region) => (
                    <Chip
                      items={{ key: region.name, label: region.name }}
                      key={region.id}
                      size="lg"
                      icon={<SmallBlackXIcon />}
                      handleClick={() => handleRegionRemove(region.id)}
                    />
                  ))}
              </S.SelectedRegionsWrapper>
              <Dialog.Close asChild>
                <S.Footer>
                  <Button size="lg">다음</Button>
                </S.Footer>
              </Dialog.Close>
            </S.RegionListWrapper>
          </>
        ) : (
          <S.RegionListWrapper>
            <S.StateList>
              {states?.data?.map((item) => (
                <S.RegionItem
                  key={item.regionId}
                  onClick={() => setStateId(item.regionId)}
                  isSelected={item.regionId === stateId}
                >
                  {item.name}
                </S.RegionItem>
              ))}
            </S.StateList>
            <Dialog.Close asChild>
              <S.CityList>
                {cities?.data?.map((item) => (
                  <S.RegionItem
                    key={item.regionId}
                    onClick={() => {
                      setCityId(item.regionId);
                      handleRegionSelect(
                        item.parentName + ' ' + item.name,
                        item.regionId
                      );
                      setSelectedRegions(item.parentName + ' ' + item.name);
                    }}
                    isSelected={item.regionId === cityId}
                  >
                    {item.parentName + ' ' + item.name}
                  </S.RegionItem>
                ))}
              </S.CityList>
            </Dialog.Close>
          </S.RegionListWrapper>
        )}
      </S.RegionContainer>
    </BottomBaseModal>
  );
};

export default RegionModal;
