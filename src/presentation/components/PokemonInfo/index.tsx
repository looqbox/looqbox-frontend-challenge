import "./styles.css";

interface PokemonInfoProps {
  title: string;
  value?: string;
  variant?: "hp" | "attack" | "defense" | "special-attack" | "special-defense" | "speed" | "default"; 
}

const PokemonInfo: React.FC<PokemonInfoProps> = ({ title, value, variant = "default" }) => {
  const getVariantClass = (variant: PokemonInfoProps['variant']) => { // Utilizando a tipagem da interface
    switch (variant) {
      case "hp":
        return "pokemon-info-hp";
      case "attack":
        return "pokemon-info-attack";
      case "defense":
        return "pokemon-info-defense";
      case "special-attack":
        return "pokemon-info-special-attack";
      case "special-defense":
        return "pokemon-info-special-defense";
      case "speed":
        return "pokemon-info-speed";
      default:
        return "pokemon-info-default"; // 'default' agora é reconhecido
    }
  };

  return (
    <div className={`pokemon-info-container ${getVariantClass(variant)}`}>
      <span className="pokemon-info-title">
        {title}
      </span>
      <span className="pokemon-info-value">
        {value}
      </span>
    </div>
  );
};

export default PokemonInfo;
