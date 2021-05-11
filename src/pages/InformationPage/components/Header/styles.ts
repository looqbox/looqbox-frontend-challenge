import styled from "styled-components";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";

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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BackIcon = styled(ArrowBack)`
  width: 42px;
  height: 42px;
  color: #676464;
  fill: #676464;
  cursor:pointer;
`;
export const Button = styled.div`
  background: #e3350d;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: #ffffff;
`;
