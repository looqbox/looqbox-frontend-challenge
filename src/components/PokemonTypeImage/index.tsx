import { useNavigate } from "react-router-dom";

type PokemonTypeImageProps = {
  type?: string;
  size?: number;
  fallback?: string;
};

export const PokemonTypeImage = ({
  type = "default",
  size = 20,
  fallback = "/assets/svgs/icons/question-circle.svg",
}: PokemonTypeImageProps) => {
  const navigate = useNavigate();

  return (
    <img
      key={type}
      src={`/assets/svgs/species/${type}.svg`}
      alt={type}
      width={size}
      onClick={() => navigate(`/type/${type}`)}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = fallback;
      }}
    />
  );
};
