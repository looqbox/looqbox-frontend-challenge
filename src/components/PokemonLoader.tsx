import { Progress } from "antd";


const PokemonLoader = () => {
    return (
       <div className="flex flex-col items-center justify-center min-h-100">
      <img 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" 
        className="w-16 h-16 animate-bounce mb-4" 
        alt="Loading..."
      />
      <div className="w-64 text-center">
        <Progress status="active" strokeColor="#ff4d4f" />
        <p className="mt-2 text-gray-500 font-medium">Loading Pokemons...</p>
      </div>
    </div>
  );
};

export default PokemonLoader;