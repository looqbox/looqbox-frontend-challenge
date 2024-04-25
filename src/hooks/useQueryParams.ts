import { useSearchParams } from "react-router-dom";

export default function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  function setParams(key: string, val: string | number) {
    const params = searchParams;
    params.set(key, `${val}`);

    setSearchParams(params);
  }
  const pageSize = Number(searchParams.get("pageSize") ?? 12);
  const page = Number(searchParams.get("page") ?? 1);
  const habitat = searchParams.get("habitat");

  return { page, habitat, pageSize, setParams };
}
