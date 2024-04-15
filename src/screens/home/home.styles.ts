import styled, { css } from 'styled-components'

export const Content = styled.main`
  ${({ theme }) => css`
    min-height: 100vh;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.grayscale.white};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
  `}
`

export const FeedbackWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`

export const Pokemons = styled.div`
  gap: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`

export const FeedLoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacings.xsmall};
`
