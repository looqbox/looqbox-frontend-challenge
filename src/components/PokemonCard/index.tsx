import { useNavigate } from 'react-router-dom';
import { getPokemonImage } from '../../apis/getPokemonImage';
import type { Pokemon } from '../../constants/Pokemon';
import { pokemonTypes } from '../../constants/pokemonTypes';
import SimpleButton from '../SimpleButtom';
import TypePill from '../TypePill';
import * as S from './styles';

type Props = {
  pokemon: Pokemon;
};

function PokemonCard({ pokemon }: Props) {
  const pokemonImage = getPokemonImage(pokemon.id);
  const navigate = useNavigate();
  function formatId(id: number) {
    if (id < 10) return `#00${id}`;
    if (id < 100) return `#0${id}`;
    return `#${id}`;
  }

  const mainType = pokemon.types[0]?.type.name ?? 'normal';
  const typeData = pokemonTypes.find((t) => t.name === mainType);

  const mainColor = typeData?.color ?? '#777';

  function goToDetails() {
    navigate(`/pokemon/${pokemon.id}`, { state: { pokemon } });
  }

  return (
    <S.Container data-testid={`card-${pokemon.name}`}>
      <S.Overlay $color={mainColor} />
      <S.ImageWrapper>
        <img src={pokemonImage} alt={pokemon.name} loading="lazy" />
      </S.ImageWrapper>

      <S.Number>{formatId(pokemon.id)}</S.Number>
      <S.Name>{pokemon.name}</S.Name>

      <S.Types>
        {pokemon.types.map(({ type }) => {
          const typeData = pokemonTypes.find((t) => t.name === type.name);
          const color = typeData?.color ?? '#777';
          const icon = typeData?.icon ?? '';

          return <TypePill key={type.name} color={color} icon={icon} label={type.name} />;
        })}
      </S.Types>

      <S.Features>
        <S.Spec>
          <S.Metrics>{(pokemon.weight / 10).toFixed(1)} kg</S.Metrics>
          <span>Peso</span>
        </S.Spec>
        <S.Spec>
          <S.Metrics>{(pokemon.height / 10).toFixed(1)} m</S.Metrics>
          <span>Altura</span>
        </S.Spec>
      </S.Features>
      <SimpleButton
        text="Mais detalhes"
        color={mainColor}
        onClick={goToDetails}
        position="absolute"
        borderRadius="0 0 20px 20px"
        height="50px"
      />
    </S.Container>
  );
}

export default PokemonCard;
