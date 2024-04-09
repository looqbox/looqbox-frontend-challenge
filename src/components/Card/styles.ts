import { Card } from "antd";
import { styled } from "styled-components";

export const Container = styled(Card)`
  max-width: 250px;
  height: 300px;
  box-shadow: ${({ theme }) =>
    theme.type === "light"
      ? "0 4px 8px rgba(0, 0, 0, 0.1)"
      : "0 4px 8px rgba(255, 255, 255, 0.1)"};

  overflow: hidden;
`;
