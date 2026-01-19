import { LoadingOutlined } from '@ant-design/icons'
import { Card, Flex, Image, Spin, Typography } from 'antd'
import Meta from 'antd/es/card/Meta'
import { useState } from 'react'
import { Link } from 'react-router'
import TypeTag from '../../../components/TypeTag'
import '../../../styles/pokecard.css'
import type { PokemonTypes } from '../../../types/pokemonTypes'

interface Props {
  id: string
  name: string
  img: string
  animatedImg: string
  types: PokemonTypes[]
  isLoading: boolean
}

const PokeCard = ({ id, name, img, animatedImg, types, isLoading }: Props) => {
  const [isHovering, setHovering] = useState(false)

  return (
    <Link to={`/pokemon/${id}`}>
      <Card
        hoverable
        loading={isLoading}
        className="pokecard"
        onMouseOver={() => setHovering(true)}
        onMouseOut={() => setHovering(false)}
        cover={
          <PokeImage
            img={img}
            name={name}
            animatedImg={animatedImg}
            isHovering={isHovering}
          />
        }
      >
        <Meta
          title={
            <Typography.Title
              level={3}
              style={{
                textTransform: 'capitalize'
              }}
            >
              {name.split('-').join(' ')}
            </Typography.Title>
          }
          description={
            <Flex>
              {types.map(type => (
                <TypeTag key={type} type={type} />
              ))}

              <Typography.Text disabled style={{ marginLeft: 'auto' }}>
                #{id}
              </Typography.Text>
            </Flex>
          }
        />
      </Card>
    </Link>
  )
}

interface PokeImageProps {
  isHovering: boolean
  name: Props['name']
  img: Props['img']
  animatedImg: Props['animatedImg']
}

const PokeImage = ({ name, img, animatedImg, isHovering }: PokeImageProps) => {
  return (
    <div className="pokecard__image--container">
      <Image
        src={isHovering ? animatedImg : img}
        alt={`${name} image`}
        preview={false}
        fallback="https://placehold.co/260.png?text=Image+not+found"
        placeholder={
          <Flex justify="center" align="center" style={{ height: '100%' }}>
            <Spin indicator={<LoadingOutlined spin />} size="large" />
          </Flex>
        }
        className={
          isHovering ? 'pokecard__image--animated' : 'pokecard__image--static'
        }
      />
    </div>
  )
}

export default PokeCard
