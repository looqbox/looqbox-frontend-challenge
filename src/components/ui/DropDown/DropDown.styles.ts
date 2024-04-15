import styled, { css } from 'styled-components'

export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.grayscale.white};
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 2.4rem;
    z-index: ${theme.layers.alwaysOnTop};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.identity.primary};
    color: ${theme.colors.grayscale.white};
    margin-top: ${theme.spacings.small};
    position: absolute;
    right: 0;
    z-index: ${theme.layers.alwaysOnTop};

    &::before {
      content: '';
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.grayscale.white};
      top: -1.2rem;
      right: 2.4rem;
    }
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${theme.layers.overlay};
    background-color: rgba(0, 0, 0, 0.5);
  `}
`

type WrapperProps = { $isOpen?: boolean }

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, $isOpen }) => css`
    position: relative;
    width: max-content;

    ${Content}, ${Overlay} {
      transition:
        transform 0.2s ease-in,
        opacity ${theme.transition.default};
      ${!!$isOpen && wrapperModifiers.open()}
      ${!$isOpen && wrapperModifiers.close()}
    }
  `}
`
