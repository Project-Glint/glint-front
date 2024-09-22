import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { buttonVariant } from 'types'

export const Button = styled.button<{ variant?: buttonVariant }>`
  ${({ variant }) => css`
    height: ${variant === 'smPink'
      ? '40px'
      : variant === 'underline' || variant === 'icon'
        ? 'fit-content'
        : variant === 'xsPink' || variant === 'xsWhite'
          ? '34px'
          : '56px'};
    border-radius: 8px;
    width: ${variant === 'lgPink'
      ? '320px'
      : variant === 'mdPink' || variant === 'mdWhite' || variant === 'xsWhite'
        ? '140px'
        : variant === 'smPink'
          ? '59px'
          : 'fit-content'};
    color: ${variant === 'underline' ||
    variant === 'mdWhite' ||
    variant === 'xsWhite'
      ? '#000000'
      : '#ffffff'};
    text-decoration: ${variant === 'underline' && 'underline'};
  `}
`
