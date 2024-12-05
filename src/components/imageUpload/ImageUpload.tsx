import { Control, useController } from 'react-hook-form';
import * as S from './ImageUpload.styled';
import { ChangeEvent, useRef } from 'react';
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
} from '@dnd-kit/sortable';
import { PlusIcon, WhiteXIcon } from 'assets';

interface ImageUploadProps {
  name: string;
  control: Control<any>;
  rules?: object;
  imageLength: number;
  previews: string[] | [];
  setPreviews: React.Dispatch<React.SetStateAction<string[]>>;
}

type SortableImageType = {
  url: string;
  id: string;
  index: number;
  onDelete: () => void;
};

const SortableImage = ({ url, id, index, onDelete }: SortableImageType) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id,
      transition: {
        duration: 10,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
    });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition,
  };

  const getBadgeType = (index: number) => {
    if (index === 0) return '대표';
    if (index === 1 || index === 2) return '필수';
    return null;
  };

  const badgeType = getBadgeType(index);

  return (
    <S.PreviewImageWrapper
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      {badgeType && <S.Badge type={badgeType}>{badgeType}</S.Badge>}
      <S.PreviewImage src={url} alt={`profile ${index}`} />
      <S.DeleteButton type="button" onClick={onDelete}>
        <WhiteXIcon />
      </S.DeleteButton>
    </S.PreviewImageWrapper>
  );
};

const ImageUpload = ({
  name,
  control,
  rules,
  imageLength,
  previews,
  setPreviews,
}: ImageUploadProps) => {
  const { field } = useController({
    name,
    control,
    rules: {
      validate: (files: File[]) => {
        if (files.length < 3) return '이미지를 3개 이상 등록해주세요.';
        return true;
      },
      ...rules,
    },
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const updatePreviews = (files: File[]) => {
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => {
      prev.forEach((url) => URL.revokeObjectURL(url));
      return urls;
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files ? Array.from(e.target.files) : [];
    const updatedFiles = [...(field.value || []), ...newFiles];
    field.onChange(updatedFiles);
    updatePreviews(updatedFiles);
  };

  const handleFileDelete = (index: number) => {
    const newFiles = [...(field.value || [])];
    newFiles.splice(index, 1);
    field.onChange(newFiles);
    updatePreviews(newFiles);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const oldIndex = Number(active.id);
    const newIndex = Number(over.id);

    const newFiles = arrayMove([...field.value], oldIndex, newIndex);
    field.onChange(newFiles);
    updatePreviews(newFiles);
  };

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <S.ImageContainer>
      <S.Input
        type="file"
        multiple
        ref={fileInputRef}
        accept="image/*"
        onChange={handleFileChange}
        id="imageInput"
      />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <S.PreviewGrid>
          <SortableContext items={previews.map((_, index) => index.toString())}>
            {previews.map((preview, index) => (
              <SortableImage
                key={index}
                url={preview}
                id={index.toString()}
                index={index}
                onDelete={() => handleFileDelete(index)}
              />
            ))}
          </SortableContext>

          {Array.from({
            length: Math.max(imageLength - previews.length, 0),
          }).map((_, index) => {
            const slotIndex = previews.length + index;
            const getBadgeType = (index: number) => {
              if (index === 0) return '대표';
              if (index === 1 || index === 2) return '필수';
              return null;
            };

            const badgeType = getBadgeType(slotIndex);

            return (
              <S.AddImageLabel key={`emptyImage-${index}`} htmlFor="imageInput">
                {badgeType && <S.Badge type={badgeType}>{badgeType}</S.Badge>}
                <PlusIcon />
              </S.AddImageLabel>
            );
          })}
        </S.PreviewGrid>
      </DndContext>
    </S.ImageContainer>
  );
};

export default ImageUpload;
