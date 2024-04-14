import { Pagination } from "antd";
import styled from "styled-components";

export const StyledPagination = styled(Pagination)`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  .ant-pagination-item {
    border-radius: 99px;
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
    }

    a {
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      color: #2f5aff;
    }
  }

  .ant-pagination-item-active {
    background-color: #fff;
    border-color: #2f5aff;

    a {
      font-family: "Montserrat", sans-serif;
      color: #2f5aff;
      font-weight: bold;

      &:hover {
        opacity: 0.7;
        color: #2f5aff;
      }
    }

    &:hover {
      opacity: 0.7;
      border-color: #2f5aff;
    }
  }

  .ant-pagination-item-link {
    transition: 0.3;

    span {
      svg {
        fill: #2f5aff;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  .ant-pagination-item-container {
    transition: 0.3;

    span {
      svg {
        fill: #2f5aff;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  .ant-pagination-options-quick-jumper {
    color: #2f5aff;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
  }

  .ant-pagination-item-ellipsis {
    font-family: "Montserrat", sans-serif !important;
    font-weight: bold !important;
    color: #2f5aff !important;
  }
`;
