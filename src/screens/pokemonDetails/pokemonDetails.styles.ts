import styled, { css } from 'styled-components'

import { PokemonTypeEnum } from 'global/enum/pokemonType.enum'
import media from 'styled-media-query'

interface PokemonDetailsStyleProps {
  $pokemonType: PokemonTypeEnum
}

export const Header = styled.header`
  ${({ theme }) => css`
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.medium};

    ${media.lessThan('small')`
      flex-direction: column;
    `}
  `}
`

export const ActionWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};
  `}
`

export const PokemonName = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.grayscale.white};
  `}
`

export const PokemonID = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.grayscale.white};
  `}
`

export const GoBackButton = styled.button`
  ${() => css`
    background-color: transparent;
    border: none;
    cursor: pointer;
  `}
`

export const Wrapper = styled.main<PokemonDetailsStyleProps>`
  ${({ theme, $pokemonType }) => css`
    min-height: 50vh;
    max-height: 50vh;
    display: flex;
    justify-content: flex-end;
    background-color: ${theme.colors.type[$pokemonType]};
    padding: ${theme.spacings.large} ${theme.spacings.xsmall};

    > svg {
      width: 20rem;
      height: 20rem;
      path {
        fill: ${theme.colors.type[$pokemonType]};
        filter: brightness(110%);
      }
    }
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 100%;
    position: absolute;
    padding: ${theme.spacings.large} ${theme.spacings.xsmall};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: ${theme.spacings.xxlarge};
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.grayscale.white};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.small};
    position: relative;
    margin-top: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 0 1rem ${theme.colors.grayscale.medium};
  `}
`

export const CardContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 50rem;
    margin-top: 18rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`

export const PokemonTypes = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};
  `}
`

export const PokemonInfos = styled.div`
  ${({ theme }) => css`
    max-width: 100%;
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};

    ${media.lessThan('small')`
      flex-direction: column;
    `}
  `}
`

export const InfoWrapper = styled.div<{ $withBorder: boolean }>`
  ${({ theme, $withBorder }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: ${$withBorder
      ? `0.1rem solid ${theme.colors.grayscale.light}`
      : 'none'};
    padding: 0px ${theme.spacings.medium};

    ${media.lessThan('small')`
      border: none;
    `}
  `}
`

export const InfoValueRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
  `}
`

export const InfoText = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.regular};
    color: ${theme.colors.grayscale.dark};
  `}
`

export const InfoLabel = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.regular};
    color: ${theme.colors.grayscale.medium};
  `}
`

export const Divider = styled.div`
  ${({ theme }) => css`
    width: 0.1rem;
    height: 4.8rem;
    background-color: ${theme.colors.grayscale.light};
  `}
`

export const PokemonImage = styled.img`
  ${({ theme }) => css`
    width: 30rem;
    height: 30rem;
    margin-top: ${theme.spacings.medium};
    position: absolute;
    top: -15rem;
    max-width: 100%;
  `}
`
export const Title = styled.span<PokemonDetailsStyleProps>`
  ${({ theme, $pokemonType }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.type[$pokemonType]};
  `}
`

export const AddToWishlist = styled.button`
  ${({ theme }) => css`
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: ${theme.spacings.xsmall};
    left: ${theme.spacings.xsmall};

    &:hover {
      svg {
        fill: ${theme.colors.identity.primary};
      }
    }
  `}
`
