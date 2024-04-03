import styled, { css } from "styled-components";
import mediaQueries from "../../styles/theme/mediaQueries";

export const Wrapper = styled.div`
  margin: 0 2rem;
`

export const Title = styled.h1`
  padding-bottom: 2.5rem;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};

    ${mediaQueries.lessThan("md")`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`;

