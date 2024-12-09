import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  display: none;
`;

export const PreviewGrid = styled.div<{ imageLength: number }>`
  ${({ imageLength }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: ${imageLength > 3 && '10px'};
    width: 500px;
  `}
`;

export const PreviewImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1;
  touch-action: none;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const PreviewImage = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid ${theme.colors.gray30};
    border-radius: 12px;
  `}
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Badge = styled.div<{ type: string }>`
  ${({ theme, type }) => css`
    ${theme.fonts.caption_10_B};
    position: absolute;
    top: 8px;
    left: 8px;
    background-color: ${type === '필수'
      ? theme.colors.primary5
      : theme.colors.primary70};
    color: ${type === '필수' ? theme.colors.primary80 : theme.colors.gray0};
    padding: 2px 8px;
    border-radius: 100px;
    align-content: center;
  `}
`;

export const AddImageLabel = styled.label`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.gray30};
    cursor: pointer;
    aspect-ratio: 1;
    width: 100%;
    border-radius: 12px;
  `}
`;
