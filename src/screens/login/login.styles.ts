import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 100vw;
    background-color: ${theme.colors.identity.primary};
  `}
`

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: ${theme.spacings.xxlarge};
  `}
`

export const PokedexLogo = styled.img`
  ${() => css`
    width: 40rem;
    height: auto;
  `}
`

export const ModalFooter = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    gap: ${theme.spacings.small};
    margin-top: ${theme.spacings.small};
  `}
`
