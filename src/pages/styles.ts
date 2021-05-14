import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  font-size: 16px;
  width: 80%;
`;

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
`;

export const GridItem = styled.div`
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 20px;
`;

export const Title = styled.h2`
  text-transform: capitalize;
`;
