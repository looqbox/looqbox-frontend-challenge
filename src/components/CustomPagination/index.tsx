import { FC } from "react";
import { StyledPagination } from "./styles";
import { PaginationProps } from "antd";

interface Props extends PaginationProps {
  currentPage: number;
  totalItens: number;
  onChange: (page: number) => void;
}

const CustomPagination: FC<Props> = ({
  currentPage,
  totalItens,
  onChange,
  ...rest
}) => {
  const handlePageChange = (page: number) => {
    onChange(page);
  };

  return (
    <StyledPagination
      {...rest}
      current={currentPage}
      total={totalItens}
      onChange={handlePageChange}
      showSizeChanger={false}
      showQuickJumper
      defaultPageSize={9}
        
    />
  );
};

export default CustomPagination;
