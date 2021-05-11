import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 1441px) {
    max-width: 1440px;
    margin: 32px auto 0px;
  }
  @media (max-width: 768px) {
    padding: 16px;
  }
  padding: 0px 60px;
  margin-top: 32px;
`;

export const Button = styled.div`
  background: #e3350d;
  border-radius: 8px;
  padding: 8px 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #ffffff;
  width: max-content;
  margin-bottom: 30px;
  cursor:pointer;
`;
