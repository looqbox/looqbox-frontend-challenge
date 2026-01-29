import { Link } from 'react-router-dom';
import { PokemonImage } from '../../../components/PokemonImage/PokemonImage';
import { formatPokemonName } from '../../../shared/utils/formatPokemonName';

type Props = {
  names: string[];
  getPokemonIdByName: (name: string) => number | null;
};

export function EvolutionRow({ names, getPokemonIdByName }: Props) {
  const evolutionsImagesSize: number[] = [100, 160, 200];

  return (
    <div className="evolution-row">
      {names.map((name, index) => {
        const id = getPokemonIdByName(name);

        return (
          <div key={name} className="evolution-item">
            <Link to={`/pokemon/${name}`}>
              <PokemonImage
                id={id}
                name={formatPokemonName(name)}
                width={evolutionsImagesSize[index]}
                height={evolutionsImagesSize[index]}
              />

              <div className="evolution-label">{formatPokemonName(name)}</div>
            </Link>

            {index < names.length - 1 && <div className="evolution-arrow">→</div>}
          </div>
        );
      })}
    </div>
  );
}
