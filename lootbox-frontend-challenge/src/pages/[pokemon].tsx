import { useDetailModel } from '../hooks/models/use-details.model';
import { DetailsView } from '../views/details.view';
/**
 * @function DetailsPage página dedicada a detalhes de um pokémon
 * @constant models todas as variáveis ou métodos utilizados na view
 * @returns Retorno da view-model com sua injeção de propriedades
 */
export function DetailsPage() {
  const models = useDetailModel();

  return <DetailsView {...models} />;
}
