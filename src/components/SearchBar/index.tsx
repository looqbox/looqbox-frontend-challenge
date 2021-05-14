import { useState } from "react";

import * as S from "./styles";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState<string>("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(search);
      }}
    >
      <S.Input
        name="query"
        type="search"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <S.Button type="submit">Search</S.Button>
    </form>
  );
}
