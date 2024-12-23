import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const RegionContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: calc(100vh - 144px);
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

export const RegionListWrapper = styled.div<{ isMultiple?: boolean }>`
  ${({ theme, isMultiple }) => css`
    ${theme.fonts.body_14_M};
    display: flex;
    justify-content: space-between;
    flex: 1;
    overflow-y: auto;
    margin-bottom: ${isMultiple && '144px'};
    border-bottom: 1px solid ${theme.colors.gray30};
  `}
`;

export const StateList = styled.div`
  width: 39.2%;
  overflow-y: auto;
  flex-direction: column;
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
    height: 44px;
    align-content: center;
    padding: 12px 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    svg {
      & path {
        fill: ${isSelected && theme.colors.primary80};
      }
    }
  `}
`;

export const SelectedRegionsWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 64px;
    padding: 12px 16px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    background-color: ${theme.colors.gray0};
    position: fixed;
    bottom: 80px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    height: 80px;
    width: 100%;
    justify-content: center;
    align-content: center;
    padding: 16px;
    background-color: ${theme.colors.gray0};
    border-top: 1px solid ${theme.colors.gray30};
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  `}
`;
