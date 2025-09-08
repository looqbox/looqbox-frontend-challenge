import { useHomeModel } from '../hooks/models/use-home.model';
import { HomeView } from '../views/home.view';
/**
 * @function HomePage página dedicada a listagem de Pokémons
 * @constant models todas as variáveis ou métodos utilizados na view
 * @returns Retorno da view-model com sua injeção de propriedades
 */
export function HomePage() {
  const models = useHomeModel();

  return <HomeView {...models} />;
}
