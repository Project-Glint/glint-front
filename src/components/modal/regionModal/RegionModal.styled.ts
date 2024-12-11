import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const RegionContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const RegionTitleWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_14_M};
    color: ${theme.colors.gray70};
    height: 44px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${theme.colors.gray20};
    border-bottom: 1px solid ${theme.colors.gray20};

    > div {
      display: flex;
      padding: 12px 16px;

      &:first-of-type {
        width: 39.2%;
      }

      &:last-of-type {
        width: 60.8%;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 44px;
          width: 1px;
          background-color: ${theme.colors.gray20};
        }
      }
    }
  `}
`;

export const RegionListWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body_14_M};
    color: ${theme.colors.gray70};
    display: flex;
    justify-content: space-between;
    max-height: 528px;
    cursor: pointer;
  `}
`;

export const StateList = styled.div`
  ${({ theme }) => css`
    width: 39.2%;
    overflow-y: auto;
    flex-direction: column;
  `}
`;

export const CityList = styled.div`
  ${({ theme }) => css`
    width: 60.8%;
    position: relative;
    flex-direction: column;
    overflow-y: auto;
    border-left: 1px solid ${theme.colors.gray20};
  `}
`;

export const RegionItem = styled.div<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    ${theme.fonts.body_14_M};
    color: ${isSelected ? theme.colors.primary80 : theme.colors.gray70};
    background-color: ${isSelected
      ? theme.colors.primary5
      : theme.colors.gray0};
  `}
  height: 44px;
  align-content: center;
  padding: 12px 16px;
`;
