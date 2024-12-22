import * as Avatar from '@radix-ui/react-avatar';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const AvatarRoot = styled(Avatar.Root)<{ zIndex: number }>`
  ${({ theme, zIndex }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    border: 1.5px solid ${theme.colors.gray90};
    position: relative;
    z-index: ${zIndex};
    margin-left: -6px;
    &:first-of-type {
      margin-left: 0;
    }
  `}
`;

export const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AvatarFallback = styled(Avatar.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
