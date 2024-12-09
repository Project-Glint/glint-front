import {
  ButtonFooter,
  Popover,
  RegionModal,
  Tabs,
  Tag,
  TextareaController,
  TextController,
} from 'components';
import * as S from './CreateMeetingRoom.styled';
import { useFormContext } from 'react-hook-form';
import { CreateMeetingForm } from 'types';
import { peopleNumberList, PlusIcon } from 'assets';
import { useRef, useState } from 'react';

interface CreateMeetingRoomProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const CreateMeetingRoom = ({ step, setStep }: CreateMeetingRoomProps) => {
  const { control, watch, handleSubmit, setValue } =
    useFormContext<CreateMeetingForm>();
  const title = watch('title');
  const description = watch('description');
  const peopleNumber = watch('peopleNumber');
  const activityRegionName = watch('activityRegionName');
  // const activityRegionId = watch('activityRegionId');
  // const hashtags = watch('hashtags');
  // const representativeImage = watch('representativeImage');
  const isNextButtonEnabled =
    !!title && !!description && !!peopleNumber && !!activityRegionName;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleAlbumSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('representativeImage', file);
      const fileURL = URL.createObjectURL(file);
      setPreview(fileURL);
      setPopoverOpen(false);
    }
  };

  const handleDefaultImageSelect = () => {
    console.log('기본 이미지 선택');
    setPopoverOpen(false);
    setStep(999);
  };

  const handleRegionSelect =
    (fieldPrefix: 'activityRegion') => (name: string, id: number) => {
      setValue(`${fieldPrefix}Name`, name);
      setValue(`${fieldPrefix}Id`, id);
    };

  const handleClickNext = () => {
    if (isNextButtonEnabled) {
      setStep(step + 1);
    }
  };

  const popoverList = [
    { label: '기본 이미지 선택', handleClick: handleDefaultImageSelect },
    { label: '앨범에서 사진 선택', handleClick: handleAlbumSelect },
  ];
  return (
    <>
      <S.Title>
        개설할 미팅의
        <br />
        정보를 알려주세요.
      </S.Title>
      <S.ContentWrapper>
        <S.ContentTitle>
          미팅 내용<S.Required>*</S.Required>
        </S.ContentTitle>
        <S.MeetingContentInputWrapper>
          <TextController
            name="title"
            control={control}
            value={title}
            placeholder="제목을 입력해주세요"
            cancelIcon
            rules={{
              required: true,
              minLength: {
                value: 1,
                message: '제목은 1 ~ 50글자로 입력해 주세요.',
              },
              maxLength: {
                value: 50,
                message: '제목은 1 ~ 50글자로 입력해 주세요.',
              },
            }}
          />
          <TextareaController
            name="description"
            control={control}
            value={description}
            placeholder="간단한 자기소개나 만나고 싶은 이성, 미팅의 주제 등에 대해 적어주세요"
            showCharacterCount
            maxLength={500}
            rules={{
              minLength: {
                value: 1,
                message: '1글자 이상 입력해야합니다.',
              },
            }}
          />
        </S.MeetingContentInputWrapper>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.ContentTitle>
          인원수<S.Required>*</S.Required>
        </S.ContentTitle>
        <Tabs
          tabList={peopleNumberList}
          onChange={(value) => setValue('peopleNumber', Number(value))}
        />
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.ContentTitle>
          미팅 희망 지역<S.Required>*</S.Required>
        </S.ContentTitle>
        <RegionModal
          name="activityRegionName"
          buttonName="선택하기"
          title="미팅 희망 지역을 선택해 주세요"
          onSelect={handleRegionSelect('activityRegion')}
        />
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.ContentTitle>태그</S.ContentTitle>
        <Tag
          name="hashtags"
          control={control}
          handleChange={(value) => setValue('hashtags', value)}
        />
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.ContentTitle>대표 사진 선택</S.ContentTitle>
        <Popover
          popoverList={popoverList}
          popoverOpen={popoverOpen}
          setPopoverOpen={setPopoverOpen}
        >
          {preview ? (
            <S.AddImageLabel>
              <S.PreviewImage src={preview} />
            </S.AddImageLabel>
          ) : (
            <S.AddImageLabel>
              <PlusIcon />
            </S.AddImageLabel>
          )}
        </Popover>
        <S.Input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleFileChange}
        />
      </S.ContentWrapper>
      <ButtonFooter
        label="다음"
        isNextButtonEnabled={isNextButtonEnabled}
        handleClickNext={handleSubmit(handleClickNext)}
      />
    </>
  );
};

export default CreateMeetingRoom;
