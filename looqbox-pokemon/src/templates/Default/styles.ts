import { Card } from "antd";
import styled, { css } from "styled-components";
import mediaQueries from "../../styles/theme/mediaQueries";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 5rem;
  width: 100%;

  ${({ theme }) => css`
    background-color: ${theme.colors.background.template};
  `}

  ${mediaQueries.lessThan("lg")`
    padding: 2.5rem;
  `}

  ${mediaQueries.lessThan("md")`
    padding: 1rem;
  `}
`;

export const Content = styled(Card)`
  box-shadow: 0px 0px 45px -10px rgba(56, 56, 56, 1);
  min-height: 50vh;
  padding-bottom: 5rem;
  width: 80rem;
`;