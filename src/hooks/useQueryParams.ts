import { useSearchParams } from "react-router-dom";

export default function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  function setParams(
    currPage?: string | number,
    currPageSize?: string | number
  ) {
    const params = searchParams;
    if (currPage) {
      params.set("page", `${currPage}`);
    }
    if (currPageSize) {
      params.set("pageSize", `${currPageSize}`);
    }

    setSearchParams(params);
  }
  const pageSize = Number(searchParams.get("pageSize") ?? 12);
  const page = Number(searchParams.get("page") ?? 1);

  return { page, pageSize, setParams };
}
