import styled from "styled-components";

export const ModalStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const ModalStats = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 0.5rem;
  padding: 0.1rem 0.75rem;

  span {
    width: 100px;
  }

  .ant-slider {
    width: 100%;
  }
`;
