import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as Tabs from '@radix-ui/react-tabs';

export const TabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
`;

export const TabsList = styled(Tabs.List)<{ type: 'primary' | 'outline' }>`
  ${({ theme, type }) => css`
    flex-shrink: 0;
    display: flex;

    ${type === 'primary' &&
    css`
      background-color: ${theme.colors.gray20};
      border-radius: 12px;
    `}

    ${type === 'outline' &&
    css`
      border-bottom: 1.5px solid ${theme.colors.gray20};
    `}
  `}
`;

export const TabsTrigger = styled(Tabs.Trigger)<{
  triggerType: 'primary' | 'outline';
}>`
  ${({ theme, triggerType }) => css`
    ${theme.fonts.body_14_B};
    background-color: transparent;
    padding: 10px 20px;
    cursor: pointer;
    height: 40px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    ${triggerType === 'primary' &&
    css`
      color: ${theme.colors.gray40};
      border-radius: 12px;
      &[data-state='active'] {
        ${theme.fonts.body_14_B};
        background-color: ${theme.colors.primary60};
        color: ${theme.colors.gray0};
      }
    `}

    ${triggerType === 'outline' &&
    css`
      color: ${theme.colors.gray40};
      &[data-state='active'] {
        ${theme.fonts.body_14_B};
        border-bottom: 2px solid ${theme.colors.primary60};
        color: ${theme.colors.primary40};
      }
    `}
  `}
`;

// export const TabsContent = styled(Tabs.Content)`
//   flex-grow: 1;
//   padding: 20px;
//   background-color: white;
//   border-bottom-left-radius: 6px;
//   border-bottom-right-radius: 6px;
//   outline: none;

//   &:focus {
//     box-shadow: 0 0 0 2px black;
//   }
// `;
