import { Card } from "antd";
import styled from "styled-components";

export const CardContainer = styled(Card)`
  width: 15rem;

  & .ant-card-head {
    display: flex;
    text-align: end;
    padding-right: 0.5rem;
    margin: 0;
    height: 2rem;
    color: ${(props) => props.theme["text-secondary"]};
  }

  & .ant-card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
`;

export const InfoContainer = styled.div`
  background-color: ${(props) => props.theme.light};
  display: flex;
  justify-content: center;
  padding-block: 1rem;
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  & p {
    color: ${(props) => props.theme["text-primary"]};
    font-size: 1rem;
    font-weight: 500;
  }
`;
