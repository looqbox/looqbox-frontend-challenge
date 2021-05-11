import styled from "styled-components";
import { Search } from "@styled-icons/boxicons-regular/Search";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
export const Container = styled.form`
  position: relative;
  @media (min-width: 1441px) {
    max-width: 1440px;
    margin: 32px auto 0px;
  }
  @media (max-width: 768px) {
    padding: 16px;
  }
  padding: 0px 60px;
  margin-top: 32px;
  display: flex;
  align-items: center;
`;
export const Input = styled.input`
  width: 95%;
  @media (max-width: 769px) {
    width: 85%;
    padding: 16px;
  }
  background-color: #f3f3f3;
  border-radius: 8px;
  border: none;
  outline: 0;
  :focus {
    border: none;
  }
  :-webkit-input-placeholder {
    color: #c1bdbd;
  }
  padding: 16px 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 150%;
  text-align: left;
  color: #2f2e2e;
`;
export const Button = styled.button`
  border: none;
  outline: 0;
  width: 5%;
  @media (max-width: 769px) {
    width: 15%;
  }
  background: #e3350d;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 19px 0;
  margin-left: -10px;
  cursor: pointer;
`;
export const SearchIcon = styled(Search)`
  width: 26px;
  height: 26px;
  color: white;
  fill: white;
  flex-shrink: 0;
`;

export const TextError = styled.div`
  width: 100%;
  padding: 16px;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: #000;
`;
export const BackButtonContent = styled.div`
  display: none;
  position: relative;
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
export const BackButton = styled.div`
  background: #e3350d;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  width: max-content;
`;
export const BackIcon = styled(ArrowBack)`
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  color: white;
  fill: white;
`;
