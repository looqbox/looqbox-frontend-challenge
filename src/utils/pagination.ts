import { Pagination as PaginationProps, Result } from "@/@types/services";

export const initialPagination: PaginationProps = { page: 1, pageSize: 20 };

export const paginatedPokemons = (
  pokemons: Result[],
  page: number,
  pageSize: number,
) => {
  const startItemIndexPage = (page - 1) * pageSize;
  const endItemIndexPage = startItemIndexPage + pageSize;

  return pokemons.slice(startItemIndexPage, endItemIndexPage);
};
