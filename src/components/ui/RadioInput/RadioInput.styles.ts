import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.identity.primary};
    border-radius: 50%;
    background: transparent;
    transition: background ${theme.transition.fast};
    outline: none;
    cursor: pointer;
    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.identity.primary};
    }
    &:before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: ${theme.colors.identity.primary};
      transition: opacity ${theme.transition.fast};
      opacity: 0;
      position: absolute;
    }
    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    padding-left: ${theme.spacings.xxsmall};
    color: ${theme.colors.grayscale.dark};
    line-height: 1.8rem;
    cursor: pointer;
    font-size: ${theme.font.sizes.xsmall};
  `}
`
