import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  .ant-pagination-item-active {
    background: ${({ theme }) => theme.pokemon.colors.main.primary};
    border-color: ${({ theme }) => theme.pokemon.colors.main.tertiary};

    a {
      color: ${({ theme }) => theme.pokemon.colors.main.contrast};
    }
  }
`;
