import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.grayscale.white};
    border-radius: 1.6rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `}
`

export const InputElement = styled.input`
  border: none;
  width: 100%;
  outline: none;
  background-color: transparent;
`

export const ActionButton = styled.button`
  border: none;
  background-color: transparent;
`
