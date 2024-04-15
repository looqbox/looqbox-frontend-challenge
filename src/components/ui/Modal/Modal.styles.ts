import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export interface WrapperProps {
  $isVisible: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, $isVisible }) => css`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    overflow: hidden;
    position: fixed;

    z-index: ${theme.layers.modal};
    opacity: ${$isVisible ? '1' : '0'};
    transition: opacity 0.3s ease-in-out;
    pointer-events: ${$isVisible ? 'all' : 'none'};
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;

    ${media.lessThan('medium')`
      padding: 0px ${theme.spacings.small};
    `}
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 66rem;
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.identity.primary};
    border: 1px solid ${theme.colors.grayscale.light};
  `}
`
