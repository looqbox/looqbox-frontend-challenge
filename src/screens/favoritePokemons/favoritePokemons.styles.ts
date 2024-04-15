import styled, { css } from 'styled-components'

export const Content = styled.main`
  ${({ theme }) => css`
    min-height: 100vh;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.grayscale.white};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
  `}
`

export const Pokemons = styled.div`
  gap: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`
