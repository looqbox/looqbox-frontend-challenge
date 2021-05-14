import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
`;

export const GridItem = styled.div`
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  :hover {
    background-color: gray;
  }
`;
