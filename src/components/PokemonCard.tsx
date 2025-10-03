import { useState } from 'react'
import { Card } from 'antd'
import type { Pokemon } from '../api/pokemon'
import { BadgeType } from './BadgeType'
import { Link } from 'react-router-dom'
import { getSpriteUrl } from '../utils/getSpriteUrl'

export const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const [isHovered, setIsHovered] = useState(false)

  const { staticSprite, animatedSprite } = getSpriteUrl(pokemon)

  return (
    <Link to={`pokemon/${pokemon.id}`}>
      <Card
        className="group shadow"
        hoverable
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        cover={
          staticSprite || animatedSprite ? (
            <img
              src={isHovered ? animatedSprite : staticSprite}
              alt={pokemon.name.split('-').join(' ')}
              className={`w-36 h-36 mx-auto my-4 object-contain transition-transform duration-300 card-container-hover:scale-105 ${
                isHovered ? 'scale-105' : 'scale-100'
              }`}
            />
          ) : (
            <div className="w-36 h-36 flex items-center justify-center">
              <p>not exist</p>
            </div>
          )
        }
      >
        <Card.Meta
          title={
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <p className="capitalize max-w-[140px] truncate">
                  {pokemon.name.split('-').join(' ')}
                </p>
                <p className="opacity-80 font-normal text-sm">
                  #{pokemon.id.toString().padStart(4, '0')}
                </p>
              </div>

              <div className="flex items-center gap-1 flex-wrap">
                {pokemon.types.map((type) => (
                  <BadgeType
                    key={pokemon.id + type.type.name}
                    type={type.type.name}
                  />
                ))}
              </div>
            </div>
          }
        />
      </Card>
    </Link>
  )
}
