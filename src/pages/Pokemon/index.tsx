import React from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import styles from './styles.module.css';
import { PokemonContext } from '../../contexts/PokemonContext';
import { useParams } from 'react-router';
import Loading from '../../components/Loading';
import PokemonInfo from '../../components/PokemonInfo';
import ButtonBack from '../../components/ButtonBack';

interface IParams {
  id: string;
}
export const Pokemon: React.FC = () => {
  const params = useParams() as IParams;

  const { closeModal, openModal, InsertContent } =
    React.useContext(ModalContext);
  const { getDataInfo, infoSpecies, pokemonSelected, loading } =
    React.useContext(PokemonContext);

  React.useEffect(() => {
    getDataInfo(params.id);
    closeModal();
  }, [params]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div
            className={styles.background}
            style={{
              background: `var(--pokemon-${infoSpecies.color.name})`,
            }}
          ></div>
          <ButtonBack />
          <PokemonInfo />
        </>
      )}
    </div>
  );
};
