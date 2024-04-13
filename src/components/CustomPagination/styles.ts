import { Pagination } from "antd";
import styled from "styled-components";

export const StyledPagination = styled(Pagination)`
margin-top: 20px;
display: flex;
justify-content: center;

.ant-pagination-item {
  border-radius: 8px;
  
}

.ant-pagination-item-active {
  background-color: #fff;
  border-color: #1890ff;
  color: white;
}
`;