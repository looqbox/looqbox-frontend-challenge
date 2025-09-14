import { useNavigate } from 'react-router-dom';
import iconHome from '../../../../assets/icons/home.svg';
import logo from '../../../../assets/icons/logo.svg';
import { useAppDispatch } from '../../../../core/hooks';
import { loadPokemons, searchByName, setPage } from '../../../../core/slices/pokedexSlice';
import HeaderCarousel from '../../../Carousel';
import SearchBar from '../../../SearchBar';
import SimpleButton from '../../../SimpleButtom';
import * as S from './styles';
type Props = {
  showCarousel?: boolean;
};

function Header({ showCarousel = false }: Props) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function handleSearchResult(name: string) {
    if (name) {
      try {
        const pokemon = await dispatch(searchByName(name)).unwrap();
        navigate(`/pokemon/${pokemon.id}`, { state: { pokemon } });
      } catch {}
    } else {
      dispatch(setPage(1));
      navigate('/');
    }
  }

  return (
    <S.Container>
      {showCarousel && <HeaderCarousel />}

      <S.Header>
        <S.Logo src={logo} alt="Logo" />
        <S.ContentSearchBar>
          <SearchBar onResult={handleSearchResult} />
        </S.ContentSearchBar>
      </S.Header>
      <S.ContentButton>
        <SimpleButton
          text="Inicio"
          icon={iconHome}
          width="140px"
          onClick={() => {
            dispatch(setPage(1));
            dispatch(loadPokemons(1));
            navigate('/');
          }}
        />
      </S.ContentButton>
    </S.Container>
  );
}

export default Header;
