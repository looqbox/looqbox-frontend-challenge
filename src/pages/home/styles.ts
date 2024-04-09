import { Space as AntSpace } from "antd";
import { styled } from "styled-components";

export const Space = styled(AntSpace)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  .ant-space-item {
    width: 100%;
  }

  .ant-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const SearchRow = styled.div`
  display: flex;
  width: 100%;
  align-items: end;
  justify-content: space-between;
  gap: 10rem;

  p {
    font-size: 0.75rem;
    font-weight: 500;
    white-space: nowrap;
    line-height: 1;

    strong {
      font-size: 1.5rem;
    }
  }
  .ant-input-suffix {
    height: 24px;
  }
`;
