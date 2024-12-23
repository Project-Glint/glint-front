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
import { usePostCreateMeeting } from 'hooks';

interface CreateMeetingRoomProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setMeetingId: React.Dispatch<React.SetStateAction<number>>;
}

const CreateMeetingRoom = ({
  step,
  setStep,
  setMeetingId,
}: CreateMeetingRoomProps) => {
  const { control, watch, handleSubmit, setValue } =
    useFormContext<CreateMeetingForm>();
  const title = watch('title');
  const content = watch('content');
  const type = watch('type'); // 사람 수
  const regionName = watch('regionName');
  const regionId = watch('regionId');
  const hashtags = watch('hashtags');
  const image = watch('image');
  const isNextButtonEnabled = !!title && !!content && !!type && !!regionName;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const { mutate: postCreateMeeting } = usePostCreateMeeting();

  const handleAlbumSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('image', file);
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
    (fieldPrefix: 'region') => (name: string, id: number) => {
      setValue(`${fieldPrefix}Name`, name);
      setValue(`${fieldPrefix}Id`, id);
    };

  const handleClickNext = () => {
    if (isNextButtonEnabled) {
      postCreateMeeting(
        {
          meetingCreateRequestDto: {
            title: title,
            content: content,
            type: type,
            regionId: regionId,
            hashtags: hashtags,
          },
          image: image,
        },
        {
          onSuccess: (res) => {
            setMeetingId(res.data.meetingId);
            setStep(step + 1);
          },
          onError: (error) => {
            console.log(error);
          },
        }
      );
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
            name="content"
            control={control}
            value={content}
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
          onChange={(value) => setValue('type', value)}
        />
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.ContentTitle>
          미팅 희망 지역<S.Required>*</S.Required>
        </S.ContentTitle>
        <RegionModal
          name="regionName"
          buttonName="선택하기"
          title="지역을 선택해 주세요"
          onSelect={handleRegionSelect('region')}
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
          name="image"
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
