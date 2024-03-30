/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Pagination } from "antd/lib";

type PaginationProps = {
    total: number;
    onSearchList: (_pageNumber: number, pageSize?: number) => void;
}

export default function PaginationComponent({total, onSearchList}: PaginationProps) {
  const [current, setCurrent] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(20);

  const handleChangePagination = (page: number, size: number) => {
    setCurrent(page);
    onSearchList(page, size);
  };

  const handleChangeSize = (current: number, size: number) => {
    setCurrent(current);
    setPageSize(size);
    onSearchList(current, size);
  };

  return (
    <Pagination
      current={current}
      onChange={handleChangePagination}
      pageSize={pageSize}
      onShowSizeChange={handleChangeSize}
      responsive
      total={total}
    />
  );
}