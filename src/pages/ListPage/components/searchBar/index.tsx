import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, Modal } from "react-bootstrap";
import {
  Container,
  Input,
  Button,
  SearchIcon,
  TextError,
  BackButtonContent,
  BackButton,
  BackIcon,
} from "./styles";
import { useListPageContext } from "../../../../context/listPageContext";
import {
  searchPokemon,
  getPokemons,
} from "../../../../services/listPage/getPokemons";
type TextInput = {
  query: string;
};

const SearchBar: React.FC = () => {
  const [show, setShow] = useState(false);
  const [erros, setErros] = useState("");
  const [showButton, setShowButton] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TextInput>();
  const { setPokemonList, setPokemonOffSet } = useListPageContext();
  const submitForm = async (data: TextInput) => {
    setErros("");
    var auxWord = data.query.toLowerCase();
    await searchPokemon(auxWord).then((information) => {
      if (information === "Not Found") {
        setShow(true);
        setErros("Pokémon not found");
      } else {
        var auxArr = [
          { name: "", url: `https://pokeapi.co/api/v2/pokemon/${auxWord}/` },
        ];
        setPokemonList(auxArr);
        setShowButton(true);
      }
    });
  };
  const request = async () => {
    setShowButton(false);
    setPokemonOffSet(20);
    await getPokemons(0).then((data) => {
      setPokemonList(data.results);
    });
    var auxInput = document.getElementById("query") as HTMLInputElement;
    auxInput.value = "";
  };
  return (
    <>
      <BackButtonContent
        style={showButton ? { display: "block" } : { display: "none" }}
      >
        <BackButton onClick={request}>
          <BackIcon />
        </BackButton>
      </BackButtonContent>
      <Container onSubmit={handleSubmit(submitForm)}>
        <Input
          type="text"
          placeholder="Search for a name or a number"
          id="query"
          {...register("query", {
            required: { value: true, message: "Insert a word or a number" },
            min: { value: 1, message: "Start with number one" },
          })}
        />

        <Button>
          <SearchIcon />
        </Button>

        {errors.query?.type === "required" && (
          <>
            <Alert variant={"danger"} style={{ position: "absolute", top: 60 }}>
              {errors.query.message}
            </Alert>
          </>
        )}
        {errors.query?.type === "min" && (
          <>
            <Alert variant={"danger"} style={{ position: "absolute", top: 60 }}>
              {errors.query.message}
            </Alert>
          </>
        )}
      </Container>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
      >
        <TextError>{erros}</TextError>
      </Modal>
    </>
  );
};

export default SearchBar;
