import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 1441px) {
    max-width: 1440px;
    margin: 100px auto 0px;
  }
  @media (max-width: 768px) {
    padding: 16px;
  }
  padding: 0px 60px;
  margin-top: 100px;
`;
export const Title = styled.div`
  @media (max-width: 768px) {
    font-size: 32px;
  }
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 125%;
  color: #2f2e2e;
`;
export const Text = styled.div`
  padding-left: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 125%;
  color: #2f2e2e;
  margin-top: 24px;
  @media (max-width: 578px) {
    font-size: 16px;
  }
`;
