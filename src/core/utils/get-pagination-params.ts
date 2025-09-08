export function getPaginationParamsFromQueryString(queryString: string) {
  if (!queryString) return "limit=20&offset=0";
  return queryString.split("?")[1];
}
