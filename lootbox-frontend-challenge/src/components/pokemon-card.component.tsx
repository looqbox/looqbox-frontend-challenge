import { Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';

type Props = {
  name: string;
  image: string;
};

export function PokemonCardComponent({ name, image }: Props) {
  const navigate = useNavigate();

  return (
    <Tooltip title="Clique para ver detalhes">
      <div
        className="flex flex-row bg-blue-900 p-4 rounded-md items-center w-80 gap-4
        hover:scale-105 transition-all delay-[0.1s] ease-in-out cursor-pointer h-40 relative overflow-hidden"
        onClick={() => navigate(name)}
      >
        <img src={image} alt={name} className="w-24 h-24 rounded-full object-contain bg-blue-950" />

        <h3 className="capitalize text-lg font-bold text-gray-100 text-center">{name}</h3>
        <img
          src="/src/assets/images/pokeball-background.png"
          className="absolute -bottom-14 -right-14 w-44 h-44 opacity-40"
          alt="pokeball"
        />
      </div>
    </Tooltip>
  );
}
