import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

export const GridItem = styled.div`
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const InfoTitle = styled.h2`
  font-size: 16px;
  font-weight: normal;
  margin: 0px;
`;

export const InfoValue = styled.h3`
  font-size: 24px;
  margin: 8px 0px;
  padding-bottom: 30px;
`;

export const Image = styled.img`
  width: 200px;
  display: flex;
  margin: auto;
`;