import { Pagination, PaginationProps } from "antd";
import useQueryParams from "../hooks/useQueryParams";

export default function ListPagination({
  pokemonsCount,
}: {
  pokemonsCount: number;
}) {
  const { page, pageSize, setParams } = useQueryParams();

  const onPageChange: PaginationProps["onChange"] = (currPage, formPageSize) => {
    if(page !== currPage) window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    setParams(currPage, formPageSize);
  };

  return (
    <Pagination
      pageSizeOptions={[12, 24, 36, 60, 96]}
      defaultPageSize={12}
      pageSize={pageSize}
      current={page}
      defaultCurrent={1}
      total={pokemonsCount}
      onChange={onPageChange}
      showSizeChanger
    />
  );
}
