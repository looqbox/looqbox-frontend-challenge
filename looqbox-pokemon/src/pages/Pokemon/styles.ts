import styled, { css } from "styled-components";
import mediaQueries from "../../styles/theme/mediaQueries";

export const Title = styled.h1`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};

    ${mediaQueries.lessThan("md")`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`;
