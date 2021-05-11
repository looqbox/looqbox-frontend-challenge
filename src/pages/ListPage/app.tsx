import React from "react";

import Header from "./components/header";
import SearchBar from "./components/searchBar";
import List from "./components/List";

const ListPage: React.FC = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <List />
    </>
  );
};

export default ListPage;
