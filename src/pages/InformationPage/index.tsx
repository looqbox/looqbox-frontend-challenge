import React from "react";
import { useParams, Redirect } from "react-router-dom";
import InformationPageProvider from "../../context/informationPageContext";

import App from "./app";

const InformationPage: React.FC = () => {
  const { pokemon_id }: any = useParams();
  if (!pokemon_id) {
    return <Redirect to="/" />;
  }
  return (
    <InformationPageProvider>
      <App pokemon_id={pokemon_id} />
    </InformationPageProvider>
  );
};

export default InformationPage;
