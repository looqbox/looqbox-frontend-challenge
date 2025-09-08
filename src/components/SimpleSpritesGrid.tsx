import type { PokemonSprites } from '../types/pokemon';

interface SimpleSpritesGridProps {
  sprites: PokemonSprites;
}

const SimpleSpritesGrid = ({ sprites }: SimpleSpritesGridProps) => {
  return (
    <div className="grid w-full gap-4 text-center sm:grid-cols-2">
      {[
        sprites.other?.showdown?.front_default,
        sprites.other?.showdown?.back_default,
        sprites.front_default,
        sprites.back_default,
      ].map((src, index) => (
        <div
          key={index}
          className="flex items-center justify-center rounded-2xl bg-gray-100 p-2 shadow-md"
        >
          {src ? (
            <img
              src={src}
              className="h-40 w-40 object-contain drop-shadow-lg"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}
            />
          ) : (
            <div className="flex h-40 w-40 items-center justify-center text-gray-400">
              N/A
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SimpleSpritesGrid;
