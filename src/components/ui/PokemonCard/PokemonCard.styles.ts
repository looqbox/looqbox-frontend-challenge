import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.grayscale.white};
    padding: ${theme.spacings.xxsmall} 0px;
    box-shadow: 0 0 1rem ${theme.colors.grayscale.medium};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    justify-content: space-between;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  `}
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px ${({ theme }) => theme.spacings.xsmall};
`

export const AddToWishlist = styled.button`
  ${({ theme }) => css`
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      svg {
        fill: ${theme.colors.identity.primary};
      }
    }
  `}
`

export const PokemonID = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.medium};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.grayscale.medium};
    align-self: flex-end;
  `}
`

export const PokemonName = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.regular};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.grayscale.dark};
  `}
`

export const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
  margin-top: -${({ theme }) => theme.spacings.small};
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 0px ${theme.spacings.xsmall} ${theme.spacings.xxsmall};
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-direction: column;
    align-items: center;
  `}
`
