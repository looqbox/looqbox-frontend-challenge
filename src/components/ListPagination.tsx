import { Pagination, PaginationProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { setPage, setPageSize } from "../state/services/paginationSlice";

export default function ListPagination({
  pokemonsCount,
}: {
  pokemonsCount: number;
}) {
  const pagination = useSelector((state: RootState) => state.pagination);
  const dispatch = useDispatch();

  const { pageSize, currPage } = pagination;

  const onPageChange: PaginationProps["onChange"] = (page, formPageSize) => {
    dispatch(setPage(page));

    if (formPageSize !== pageSize) {
      dispatch(setPageSize(formPageSize));
    }

    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  return (
    <Pagination
      pageSizeOptions={[12, 24, 36, 60, 96]}
      defaultPageSize={12}
      pageSize={pageSize}
      current={currPage}
      defaultCurrent={1}
      total={pokemonsCount}
      onChange={onPageChange}
      showSizeChanger
    />
  );
}
