import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 1441px) {
    max-width: 1440px;
    margin: 150px auto 50px;
  }
  @media (max-width: 768px) {
    padding: 16px;
  }
  padding: 0px 60px;
  margin: 150px auto 50px;
`;

export const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 125%;
  color: #2f2e2e;
`;

export const LabelContent = styled.div`
  margin-top: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  > span:nth-child(1) {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 125%;
    color: #000000;
  }
  > span:nth-child(2) {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 125%;
    color: #0d3ce3;
  }
`;
export const BarContent = styled.div`
  width: 100%;
  height: 20px;
  background-color: rgba(13, 60, 227, 0.3);
  border-radius: 50px;
  margin-top: 12px;
`;
export const Bar = styled.div`
  height: 20px;
  border-radius: 50px;
  background-color: #0d3ce3;
`;
