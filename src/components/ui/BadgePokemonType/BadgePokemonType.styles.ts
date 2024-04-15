import { PokemonTypeEnum } from 'global/enum/pokemonType.enum'
import styled, { css } from 'styled-components'

interface StyleProps {
  $type: PokemonTypeEnum
}

export const Wrapper = styled.div<StyleProps>`
  ${({ theme, $type }) => css`
    width: fit-content;
    display: flex;
    justify-content: center;
    border-radius: 5rem;
    background-color: ${theme.colors.type[$type]};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `}
`

export const BadgeText = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.grayscale.white};
    text-transform: capitalize;
  `}
`
