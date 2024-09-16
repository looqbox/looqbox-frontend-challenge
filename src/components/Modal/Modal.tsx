import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ModalStyled } from "./ModalStyle";
import { closeModal } from "../../store/pokemonSlice";
import { RootState } from "../../store";

const Modal = () => {
  const dispatch = useDispatch();

  const isAddPokemon = useSelector((state: RootState) => state.pokemon.isAddPokemon);
  const isModalOpen = useSelector((state: RootState) => state.pokemon.isModalOpen);

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        dispatch(closeModal());
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isModalOpen, dispatch]);

  if (!isModalOpen) {
    return null;
  }

  return (
    <ModalStyled onClick={() => dispatch(closeModal())}>
      {isAddPokemon ? (
        <section className="modal">
          <h1>Gotcha!</h1>
          <p>O Pokemon foi adicionado à Pokédex!</p>
        </section>
      ) : (
        <section className="modal">
          <h1>Oh, no!</h1>
          <p>O Pokemon foi removido da sua Pokédex!</p>
        </section>
      )}
    </ModalStyled>
  );
};

export default Modal;
