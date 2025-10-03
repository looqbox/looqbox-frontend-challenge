import { useParams, Link } from 'react-router-dom'
import { Button, Card, Row, Col, message } from 'antd'
import { ArrowLeftOutlined, SoundOutlined } from '@ant-design/icons'
import { LoadingIcon } from '../components/icons/LoadingIcon'
import { BadgeType } from '../components/BadgeType'
import { StatsChart } from '../components/graphs/StatsChart'
import { PokemonMoviments } from '../components/PokemonMoviments'
import { InfoBlock } from '../components/InfoBlock'
import { PokemonChainList } from '../components/PokemonChainList'
import { PokemonEffectivenessTable } from '../components/PokemonEffectivenessTable'
import { StateMessage } from '../components/StateMessage'
import { SpriteHoverAnimated } from '../components/SpriteHoverAnimated'
import { useGetPokemonDetails } from '../hooks/useGetPokemonDetails'

function PokemonDetail() {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, isError } = useGetPokemonDetails(id)

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <LoadingIcon />
      </div>
    )
  }

  if (
    isError ||
    !data?.pokemon ||
    !data?.species ||
    !data?.abilities ||
    !data.chain ||
    !data.types
  ) {
    return (
      <StateMessage
        img="../../public/not-found-icon.png"
        alt="Not Found Icon"
        text="Pokémon not found"
        color="text-[#6d6e71]"
      />
    )
  }

  const { pokemon, species, abilities, chain, types } = data

  const handleRoar = () => {
    const cryUrl = pokemon?.cries?.latest || pokemon?.cries?.legacy
    if (!cryUrl) {
      message.warning('This Pokémon has no roar available!')
      return
    }

    const audio = new Audio(cryUrl)
    audio.play().catch(() => {
      message.error('Failed to play Pokémon cry')
    })
  }

  return (
    <div className="flex flex-col flex-1">
      <Link to="/" className="mb-4">
        <Button icon={<ArrowLeftOutlined />}>Go back</Button>
      </Link>

      <Row gutter={16}>
        <Col xs={24} md={7}>
          <Card className="shadow">
            <div className="mb-2">
              <h2 className="font-bold text-2xl capitalize">
                {pokemon.name.split('-').join(' ')}
              </h2>
              <p className="text-lg font-semibold opacity-50">
                #{pokemon.id.toString().padStart(4, '0')}
              </p>
            </div>

            <SpriteHoverAnimated
              pokemon={pokemon}
              className="!w-40 !h-40 mx-auto mb-4"
            />

            <div className="flex justify-center gap-2 mt-2">
              {pokemon.types.map((t) => (
                <BadgeType key={t.type.name} type={t.type.name} />
              ))}
            </div>

            <div className="flex justify-center mt-2">
              <Button
                type="primary"
                icon={<SoundOutlined />}
                onClick={() => handleRoar()}
              >
                Roar
              </Button>
            </div>

            <p className="mt-4">
              {
                species?.flavor_text_entries.find(
                  (f) => f.language.name === 'en',
                )?.flavor_text
              }
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              <InfoBlock
                minW={80}
                upper={false}
                label="Height"
                value={`${pokemon.height / 10} m`}
              />
              <InfoBlock
                minW={80}
                upper={false}
                label="Weight"
                value={`${pokemon.weight / 10} kg`}
              />
              <InfoBlock
                minW={80}
                upper={false}
                label="Baby"
                value={species?.is_baby ? 'Yes' : 'No'}
              />
              <InfoBlock
                minW={80}
                upper={false}
                label="Legendary"
                value={species?.is_legendary ? 'Yes' : 'No'}
              />
              <InfoBlock
                minW={80}
                upper={false}
                label="Mythical"
                value={species?.is_mythical ? 'Yes' : 'No'}
              />
            </div>
          </Card>

          <div className="my-4 w-full">
            <h3 className="font-bold text-center text-lg mb-3">
              Evolution chain
            </h3>
            {chain.length > 1 ? (
              <PokemonChainList chain={chain} />
            ) : (
              <p className="font-bold text-center opacity-60">
                Unique Evolution
              </p>
            )}
          </div>
        </Col>

        <Col xs={24} md={17}>
          <Card className="shadow">
            <h2 className="text-2xl font-bold">Stats and Characteristics</h2>

            <div className="flex flex-wrap gap-2">
              {pokemon.stats.map((stat) => (
                <InfoBlock
                  key={stat.stat.name}
                  minW={120}
                  label={stat.stat.name}
                  value={stat.base_stat}
                />
              ))}
            </div>

            <Row gutter={16} className="mt-4">
              <Col xs={24} md={12} className="p-2">
                <div className="w-full h-44">
                  <StatsChart stats={pokemon.stats} />
                </div>
              </Col>

              <Col xs={24} md={12}>
                <h3 className="font-bold text-lg">Abilities</h3>
                <div className="flex flex-col gap-3 mt-2">
                  {abilities.map((ability) => {
                    const name =
                      ability.names.find((n) => n.language.name === 'en')
                        ?.name || ability.name
                    const effect =
                      ability.effect_entries.find(
                        (e) => e.language.name === 'en',
                      )?.short_effect || 'No description available'

                    return (
                      <div
                        key={ability.id}
                        className="p-2 rounded shadow bg-gray-50"
                      >
                        <p className="font-semibold capitalize">{name}</p>
                        <p className="text-sm opacity-80">{effect}</p>
                      </div>
                    )
                  })}
                </div>
              </Col>
            </Row>

            <div className="mt-6">
              <PokemonMoviments moves={pokemon.moves} />
            </div>

            <div>
              <h3 className="font-bold text-lg text-center my-4">
                Types Effectiveness
              </h3>
              <PokemonEffectivenessTable types={types} />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default PokemonDetail
