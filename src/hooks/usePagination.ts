import { PaginationProps } from "antd";
import { useState } from "react";
import { ReferenceToEndpoint } from "../models/pokemon.model";

export default function usePagination() {
  const [pagination, setPagination] = useState({
    offset: 0,
    pageSize: 12,
  });

  const { offset, pageSize } = pagination;

  const onPageChange: PaginationProps["onChange"] = (page, pageSize) => {
    const offset = (page - 1) * pageSize;

    setPagination({ offset, pageSize });

    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  const qParams = new URLSearchParams({
    offset: offset.toString(),
    limit: pageSize.toString(),
  }).toString();

  function queryOnlyPageSize(pokemons?: ReferenceToEndpoint[]) {
    return pokemons?.slice(offset, offset + pageSize) ?? []
  }

  return { qParams, onPageChange, queryOnlyPageSize };
}
