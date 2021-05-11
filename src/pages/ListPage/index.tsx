import React from "react";
import ListPageProvider from "../../context/listPageContext";
import App from "./app";
// import { Container } from './styles';

const ListPage: React.FC = () => {
  return (
    <ListPageProvider>
      <App />
    </ListPageProvider>
  );
};

export default ListPage;
