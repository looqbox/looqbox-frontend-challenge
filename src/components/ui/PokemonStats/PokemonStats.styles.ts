import { PokemonTypeEnum } from 'global/enum/pokemonType.enum'
import styled, { css } from 'styled-components'

interface PokemonStatsStyleProps {
  $pokemonType: PokemonTypeEnum
}

export const Wrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.xxsmall};
  width: 100%;
  justify-content: center;
`

export const StatLabel = styled.span<PokemonStatsStyleProps>`
  ${({ theme, $pokemonType }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.type[$pokemonType]};
    text-transform: capitalize;
  `}
`

export const StatWrapper = styled.div`
  width: 100%;
  justify-content: center;
`

export const StatRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.xxsmall};
  align-items: center;
`

export const StatValue = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.regular};
    color: ${theme.colors.grayscale.dark};
    text-align: left;
    display: block;
  `}
`

export const StatBar = styled.div<PokemonStatsStyleProps>`
  ${({ theme, $pokemonType }) => css`
    width: 100%;
    z-index: 0;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: ${theme.colors.type[$pokemonType]};
      filter: opacity(50%);
      z-index: -1;
      border-radius: 0.4rem;
    }
  `}
`

export const StatBarFill = styled.div<
  PokemonStatsStyleProps & { $progressValue: number }
>`
  ${({ theme, $pokemonType, $progressValue }) => css`
    width: ${$progressValue}%;
    height: 0.4rem;
    border-radius: 0.4rem;
    position: relative;
    z-index: 1;
    background-color: ${theme.colors.type[$pokemonType]};
  `}
`
