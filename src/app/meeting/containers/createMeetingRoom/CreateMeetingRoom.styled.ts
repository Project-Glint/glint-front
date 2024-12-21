import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.title_20_B}
    color: ${theme.colors.gray90};
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ContentTitle = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_12_M};
    color: ${theme.colors.gray90};
  `}
`;

export const Required = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary60};
  `}
`;

export const MeetingContentInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
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
    width: 100px;
    border-radius: 12px;
  `}
`;
export const Input = styled.input`
  display: none;
`;

export const PreviewImage = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    // border: 1px solid ${theme.colors.gray30};
    border-radius: 12px;
  `}
`;
