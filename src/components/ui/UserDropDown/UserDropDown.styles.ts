import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 26rem;
    a:not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.grayscale.light};
    }
  `}
`

export const Username = styled.span`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmall};
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    cursor: pointer;
    align-items: center;
    text-decoration: none;
    background: ${theme.colors.grayscale.white};
    color: ${theme.colors.grayscale.dark};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};

    &:hover {
      background: ${theme.colors.identity.primary};
      color: ${theme.colors.grayscale.white};
      > svg {
        fill: ${theme.colors.grayscale.white};
      }
    }

    > svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    > span {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`
