import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Illustration = styled.img`
  width: 30rem;
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.grayscale.dark};
    margin-top: ${theme.spacings.small};
  `}
`
