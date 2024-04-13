import React from 'react';
import { StyledPagination } from './styles';

interface PaginationProps {
  currentPage: number;
  totalItens: number
  onChange: (page: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItens,
  onChange,
}) => {

  const handlePageChange = (page: number) => {
    onChange(page);
  };

  return (
    <StyledPagination
      current={currentPage}
      total={totalItens}
      onChange={handlePageChange}
      showSizeChanger={false}
      showQuickJumper
      defaultPageSize={9}
    />
  );
};

export default CustomPagination