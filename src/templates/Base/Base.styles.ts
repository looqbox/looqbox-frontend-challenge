import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    padding: 0px ${theme.spacings.xsmall} ${theme.spacings.small};
    background-color: ${theme.colors.identity.primary};
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    gap: 8px;
    position: sticky;
    top: 0;
    z-index: 3;
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.identity.primary};
    margin-bottom: ${({ theme }) => theme.spacings.small};

    > svg {
      margin-bottom: ${({ theme }) => theme.spacings.xxsmall};
    }
  `}
`

export const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  gap: ${({ theme }) => theme.spacings.xsmall};
  align-items: center;
`

export const Row = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacings.xsmall};
`

export const SortingWrapper = styled.div`
  ${({ theme }) => css`
    width: fit-content;
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    background-color: ${theme.colors.grayscale.white};
    border-radius: 1.6rem;
  `};
`

export const SortingText = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.grayscale.white};
  `};
`

export const Content = styled.main`
  ${({ theme }) => css`
    min-height: 100vh;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.grayscale.white};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
  `}
`

export const LoadingWrapper = styled.div`
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

export const ScreenTitle = styled.h1`
  ${({ theme }) => css`
    text-transform: capitalize;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.grayscale.white};
  `}
`
