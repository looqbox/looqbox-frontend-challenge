import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useInformationPageContext } from "../../context/informationPageContext";
import { searchPokemon } from "../../services/informationPage";

import Header from "./components/Header";
import Information from "./components/Information";
import Stats from "./components/Stats";

export interface Props {
  pokemon_id: string;
}

const InformationPage: React.FC<Props> = ({ pokemon_id }) => {
  const { pokemonInformation, setPokemonInformation } =
    useInformationPageContext();

  useEffect(() => {
    const request = async () => {
      await searchPokemon(pokemon_id).then((data) => {
        setPokemonInformation(data);
      });
    };
    request();
  }, []);

  return (
    <>
      {!pokemonInformation ? (
        <Spinner
          animation="border"
          role="status"
          style={{ margin: "50px auto", width: "100px", height: "100px" }}
        ></Spinner>
      ) : (
        <>
          <Header />
          <Information />
          <Stats />
        </>
      )}
    </>
  );
};

export default InformationPage;
