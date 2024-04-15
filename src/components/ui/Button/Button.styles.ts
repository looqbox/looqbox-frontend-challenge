import styled, { css } from 'styled-components'
import { ButtonVariant } from './defs'

interface ButtonStylesProps {
  $buttonVariantStyle: ButtonVariant
}

export const Wrapper = styled.button<ButtonStylesProps>`
  ${({ theme, $buttonVariantStyle }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    background-color: ${$buttonVariantStyle === 'primary'
      ? theme.colors.grayscale.white
      : 'transparent'};
    cursor: pointer;
    transition: background-color 0.3s;
    border: none;

    &:hover {
      background-color: ${$buttonVariantStyle === 'primary'
        ? theme.colors.grayscale.background
        : 'transparent'};

      > label {
        color: ${theme.colors.identity.primary};
      }
    }

    &:disabled {
      background-color: ${theme.colors.grayscale.light};
      color: ${theme.colors.grayscale.medium};
      cursor: not-allowed;
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    cursor: pointer;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.grayscale.dark};
    font-weight: ${theme.font.bold};
  `}
`
