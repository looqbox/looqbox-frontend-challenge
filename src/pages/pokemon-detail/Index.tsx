import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Col, Flex, Row, theme } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { Link, useNavigate, useParams } from 'react-router'
import Logo from '../../assets/Logo'
import usePokemonDetails from '../../hooks/usePokemonDetails'
import EvolutionChain from './components/EvolutionChain'
import PokeEffectiveness from './components/PokeEffectiveness'
import PokeInfos from './components/PokeInfos'
import PokeStats from './components/PokeStats'
import StateHandlers from './components/StateHandlers'
import { extractSpecies } from './data/evolutionChain'
import { formatTypeEffectiveness } from './data/pokeEffectiveness'
import { formatPokeInfo } from './data/pokeInfo'
import { formatPokeStats } from './data/pokeStats'

const PokemonDetail = () => {
  const params = useParams()
  const navigate = useNavigate()
  const {
    token: { colorBgContainer, colorSplit, screenLG }
  } = theme.useToken()

  const {
    pokeData,
    speciesData,
    typesData,
    evolutionChainData,
    isLoading,
    isError
  } = usePokemonDetails(Number(params.id), navigate)

  if (!pokeData || !speciesData || !typesData || !evolutionChainData)
    return StateHandlers({ isError: !!isError, isLoading })

  const pokeInfos = formatPokeInfo(pokeData, speciesData)
  const pokeStats = formatPokeStats(pokeData)
  const pokeEffectiveness = formatTypeEffectiveness(typesData)
  const evolutionChain = extractSpecies(evolutionChainData.chain)

  return (
    <Content style={{ backgroundColor: colorBgContainer, padding: '64px 0px' }}>
      <Flex align="center" justify="center">
        <Link to="/">
          <Logo width={124} height={32} />
        </Link>
      </Flex>

      <Link to="/">
        <Button
          size="small"
          color="default"
          variant="outlined"
          style={{ marginBottom: 40, marginTop: 24 }}
          icon={<ArrowLeftOutlined />}
        >
          Go Back
        </Button>
      </Link>

      <Row gutter={[0, 40]}>
        <Col
          xs={24}
          lg={12}
          style={{
            borderRight:
              window.innerWidth > screenLG ? `1px solid ${colorSplit}` : `0px`,
            borderBottom:
              window.innerWidth < screenLG ? `1px solid ${colorSplit}` : `0px`,
            paddingBottom: window.innerWidth < screenLG ? 32 : 0
          }}
        >
          <PokeInfos data={pokeInfos} isLoading={isLoading} />
        </Col>
        <Col xs={24} lg={12}>
          <PokeStats data={pokeStats} isLoading={isLoading} />
        </Col>
      </Row>

      <Row gutter={[0, 40]} style={{ marginTop: 80 }}>
        <Col xs={24} xl={12}>
          <PokeEffectiveness data={pokeEffectiveness} isLoading={isLoading} />
        </Col>
        <Col xs={24} xl={12}>
          <EvolutionChain data={evolutionChain} isLoading={isLoading} />
        </Col>
      </Row>
    </Content>
  )
}

export default PokemonDetail
