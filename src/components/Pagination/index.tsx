import React, { useState } from "react";
import { Pagination, PaginationProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchPokemons } from "../../store/pokemonSlicer";

const CustomPagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const totalPages = useSelector(
    (state: RootState) => state.pokemon.numTotalResults,
  );

  const handleChangePage: PaginationProps["onChange"] = (page) => {
    setCurrentPage(page);
    const offset = (page - 1) * 20;
    dispatch(fetchPokemons(offset));
  };

  return (
    <Pagination
      current={currentPage}
      total={totalPages}
      defaultPageSize={20}
      showSizeChanger={false}
      onChange={handleChangePage}
      hideOnSinglePage
    />
  );
};

export default CustomPagination;
