import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const InputElement = styled.input`
  ${({ theme }) => css`
    width: 100%;
    display: block;
    outline: none;
    color: ${theme.colors.grayscale.dark};
    padding: ${theme.spacings.xxsmall};
    border-radius: 1.6rem;
    border: 1px solid ${theme.colors.grayscale.light};

    &::placeholder {
      color: ${theme.colors.grayscale.medium};
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    display: inline-block;
    color: ${theme.colors.grayscale.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
