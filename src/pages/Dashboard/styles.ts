import { Input } from "antd";
import styled from "styled-components";

export const DashboardContainer = styled.main`
  margin: 4rem auto;
  padding-inline: 1rem;
  max-width: 1800px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SearchContainer = styled(Input)`
  max-width: 900px;

  & input {
    border: 1px solid transparent;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-block: 3rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;

  max-height: 40rem;
  overflow-y: auto;
`;

export const ErrorMessage = styled.h2`
  color: ${(props) => props.theme["text-secondary"]};
  margin-top: 2rem;
`;
