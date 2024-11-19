import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ImageContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  display: none;
`;

export const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 10px;
  width: 500px;
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
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 24px;
  height: 24px;
  color: #f00;
  background-color: #fff;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f8f8f8;
  }
`;

export const AddImageLabel = styled.label`
  ${({ theme }) => css`
    ${theme.shadows.strong}
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed #ccc;
    cursor: pointer;
    aspect-ratio: 1;
    width: 100%;
    border-radius: 0.5rem;

    &:hover {
      border-color: #999;
    }

    span {
      font-size: 24px;
      color: #666;
    }
  `}
`;
