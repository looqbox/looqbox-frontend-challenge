import PokemonsList from "../../components/pokemons-list";

import './styles.css';
export default function HomePage() {

  return (
    <section id="hero" className="container">
      <h1>What are you looking for ?</h1>
      <PokemonsList/>
    </section>
  )
};