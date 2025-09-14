import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getPokemonImage } from '../../apis/getPokemonImage';
import IconHeight from '../../assets/icons/height.svg';
import iconLeft from '../../assets/icons/left.svg';
import pokeball from '../../assets/icons/pokeball.svg';
import iconRight from '../../assets/icons/right.svg';
import IconWeight from '../../assets/icons/weight.svg';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Loading } from '../../components/Loading';
import SimpleButton from '../../components/SimpleButtom';
import StatsBarChart from '../../components/StatusBarChart';
import StatsRadarChart from '../../components/StatusRadarChart';
import TypePill from '../../components/TypePill';
import { pokemonTypes } from '../../constants/pokemonTypes';
import { useAppDispatch, useAppSelector } from '../../core/hooks';
import { loadDetails } from '../../core/slices/pokedexSlice';
import { useIsMobile } from '../../hooks/useIsMobile';
import * as S from './styles';

function Statistics() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMobile = useIsMobile();
  const { status, error } = useAppSelector((s) => s.pokedex);
  const { id } = useParams();
  const { state } = useLocation() as { state?: { pokemon?: any } };
  const currentId = Number(id);
  const details = useAppSelector((s) => s.pokedex.detailsById[currentId]);
  const pokemon = details?.pokemon ?? state?.pokemon ?? null;
  const description = details?.description ?? '';
  const [chartType, setChartType] = useState('bar');
  const mainType = pokemon.types[0]?.type.name ?? 'normal';
  const typeData = pokemonTypes.find((t) => t.name === mainType);
  const mainColor = typeData?.color ?? '#adcab8';
  const total = useAppSelector((s) => s.pokedex.total) || 1010;
  const hasPrev = currentId > 1;
  const hasNext = currentId < total;
  const pokemonImage = getPokemonImage(pokemon.id);

  const stats = pokemon.stats.map((s: any) => ({
    name: s.stat.name.toUpperCase(),
    value: s.base_stat,
    color: mainColor,
  }));

  const pokePrevious = useCallback(() => {
    if (hasPrev) navigate(`/pokemon/${currentId - 1}`);
  }, [hasPrev, navigate, currentId]);

  const pokeNext = useCallback(() => {
    if (hasNext) navigate(`/pokemon/${currentId + 1}`);
  }, [hasNext, navigate, currentId]);

  useEffect(() => {
    if (!id) return;
    if (!details) dispatch(loadDetails(Number(id)));
  }, [id, details, dispatch]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') pokePrevious();
      if (e.key === 'ArrowRight') pokeNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [pokePrevious, pokeNext]);

  useEffect(() => {
    if (hasNext) dispatch(loadDetails(currentId + 1));
    if (hasPrev) dispatch(loadDetails(currentId - 1));
  }, [currentId, hasNext, hasPrev, dispatch]);

  if (!id) return <ErrorMessage message="ID inválido." />;

  if (!pokemon && status === 'loading') return <Loading />;

  if (!pokemon && status === 'failed') return <ErrorMessage message={error} />;

  if (!pokemon) return <ErrorMessage message="Pokémon não encontrado." />;
  if (status === 'failed') return <ErrorMessage message={error} />;

  return (
    <>
      <S.Container>
        <S.Content $color={mainColor}>
          <S.ContantLeft>
            <S.Statistic>
              <S.Name $color={stats[0].color}>{pokemon.name.toUpperCase()}</S.Name>
              <S.Information>
                <S.Icon src={IconWeight} />
                Peso: {pokemon.weight / 10} kg
              </S.Information>
              <S.Information>
                <S.Icon src={IconHeight} />
                Altura: {pokemon.height / 10} m
              </S.Information>
              <S.Types>
                {pokemon.types.map(({ type }) => {
                  const typeData = pokemonTypes.find((t) => t.name === type.name);
                  const color = typeData?.color ?? '#777';
                  const icon = typeData?.icon ?? '';

                  return <TypePill key={type.name} color={color} icon={icon} label={type.name} />;
                })}
              </S.Types>
            </S.Statistic>
            {chartType === 'bar' ? (
              <S.GraphicBAr>
                <StatsBarChart stats={stats} />
              </S.GraphicBAr>
            ) : (
              <S.GraphicChart>
                <StatsRadarChart stats={stats} />
              </S.GraphicChart>
            )}
            <S.ButtonGraphic>
              <SimpleButton
                text="Barra"
                width="140px"
                onClick={() => setChartType('bar')}
                active={chartType === 'bar' ? true : false}
              />
              <SimpleButton
                active={chartType === 'radar' ? true : false}
                text="Radar"
                width="140px"
                onClick={() => setChartType('radar')}
              />
            </S.ButtonGraphic>
          </S.ContantLeft>

          <S.ContantRight>
            <S.Image src={pokemonImage} alt={pokemon.name} loading="lazy" />

            <S.ResumePokemon $color={stats[0].color}>{description}</S.ResumePokemon>
          </S.ContantRight>
          <S.ImagePokeball src={pokeball} alt="Pokeball" />
        </S.Content>
        <S.NavBar>
          <SimpleButton
            text=""
            width={isMobile ? '80px' : '140px'}
            height={isMobile ? '50px' : '70px'}
            icon={iconLeft}
            sizeIcon={isMobile ? '80px' : '140px'}
            onClick={pokePrevious}
            {...(!hasPrev ? { disabled: true } : {})}
          />
          <SimpleButton
            text=""
            icon={iconRight}
            sizeIcon={isMobile ? '80px' : '140px'}
            width={isMobile ? '80px' : '140px'}
            height={isMobile ? '50px' : '70px'}
            onClick={pokeNext}
            {...(!hasNext ? { disabled: true } : {})}
          />
        </S.NavBar>
      </S.Container>
    </>
  );
}

export default Statistics;
