import { BottomBaseModal } from '../baseModal';
import * as S from './RegionModal.styled';
import { useGetRegionCity, useGetRegionState } from 'hooks';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { SelectButton } from 'components/button';

interface RegionModalProps {
  buttonName?: string;
  title?: string;
  name: string;
  onSelect: (name: string, id: number) => void;
  initialValue?: string;
}
const RegionModal = ({
  buttonName,
  title,
  onSelect,
  initialValue,
}: RegionModalProps) => {
  const [stateId, setStateId] = useState<number>(1);
  const [cityId, setCityId] = useState<number>();
  const { data: states } = useGetRegionState();
  const { data: cities } = useGetRegionCity(stateId);
  const [regionFullName, setRegionFullName] = useState<string>(
    initialValue || ''
  );

  useEffect(() => {
    if (cities) {
      setCityId(cities?.data[0]?.regionId);
    }
  }, [stateId, cities]);

  useEffect(() => {
    if (initialValue) {
      setRegionFullName(initialValue);
    }
  }, [initialValue]);

  // TODO: id인지, name인지 확인
  const handleRegionSelect = (name: string, id: number) => {
    if (onSelect) {
      onSelect(name, id);
    }
  };

  return (
    <BottomBaseModal
      title={title}
      buttonChildren={
        <SelectButton selectValue={regionFullName} buttonName={buttonName} />
      }
    >
      <S.RegionContainer>
        <S.RegionTitleWrapper>
          <div>시/도</div>
          <div>시/군/구</div>
        </S.RegionTitleWrapper>
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
                    setRegionFullName(item.parentName + ' ' + item.name);
                  }}
                  isSelected={item.regionId === cityId}
                >
                  {item.parentName + ' ' + item.name}
                </S.RegionItem>
              ))}
            </S.CityList>
          </Dialog.Close>
        </S.RegionListWrapper>
      </S.RegionContainer>
    </BottomBaseModal>
  );
};

export default RegionModal;
