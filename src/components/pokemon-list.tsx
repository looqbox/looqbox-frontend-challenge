import { ReactNode, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import pokeball from '../assets/pokeball.png'
import { Loader } from './loader'
import { Badge } from './ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

type PokemonListTypes = {
  forEach(arg0: (pokemonUnit: any) => void): unknown
  name: string
  id: number
  order: number
  types: {
    map(
      arg0: (typeItem: {
        type: { name: string }
      }) => import('react/jsx-runtime').JSX.Element
    ): ReactNode
    name: string
    url: string
  }
  sprites: {
    other: {
      home: {
        front_default: string
      }
    }
  }
}

export const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<PokemonListTypes[]>([])
  const [pokemonData, setPokemonData] = useState()
  const [pokemonCount, setPokemonCount] = useState<number>(0)

  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const getPokemonFromAPI = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/')

      const data = await response.json()

      const { count, results } = data

      setPokemonList(results)
      setPokemonCount(count)
    }

    getPokemonFromAPI()
  }, [])

  useEffect(() => {
    /**
     * 1) Create a function that will iterate between the url of each item in the array returned from the API.
     * 2) Then, fetch those individual pokemon info and save it in the state.
     */
    const listOfUrls = () => {
      const pokemonUrls: string[] = []

      if (pokemonList) {
        pokemonList.forEach((pokemonUnit) => {
          pokemonUrls.push(pokemonUnit.url)
        })
      }

      return pokemonUrls
    }

    const fetchPokemonData = async () => {
      const listofPokemonUrls = listOfUrls()

      const promises = listofPokemonUrls.map(async (url) => {
        const response = await fetch(url)

        return response.json()
      })

      return Promise.all(promises)
    }

    if (pokemonList.length > 0) {
      fetchPokemonData()
        .then((data) => {
          return setPokemonData(data)
        })

        .catch((error) => console.error(error))

        .finally(() => setIsLoading(false))
    }
  }, [pokemonList])

  // console.log(pokemonList)

  return (
    <section className="mx-auto max-w-[1400px]">
      <div className="flex w-full justify-end pb-4">
        <p className="flex items-center justify-end gap-1">
          <img src={pokeball} alt="" />
          <span className="flex-1 text-2xl">{pokemonCount}</span>
        </p>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {pokemonData?.map((listItem) => {
            return (
              <Link key={listItem.id} to={`/pokemon/${listItem?.id}`}>
                <Card className="border-white transition-[background] hover:bg-white/10">
                  <img
                    src={listItem?.sprites?.other?.home?.front_default}
                    alt=""
                  />

                  <CardHeader className="mt-4 scroll-m-20 border-b border-t py-4 text-2xl font-semibold capitalize">
                    <CardTitle className="capitalize tracking-tight">
                      {listItem?.name}
                    </CardTitle>

                    <CardDescription className="tracking-tighter">
                      #{listItem?.order?.toString().padStart(4, '0')}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter className="flex gap-2 py-4">
                    {listItem?.types?.map(
                      (typeItem: { type: { name: string } }) => {
                        return (
                          <Badge
                            key={crypto.randomUUID()}
                            className="capitalize text-white"
                          >
                            {typeItem.type.name}
                          </Badge>
                        )
                      }
                    )}
                  </CardFooter>
                </Card>
              </Link>
            )
          })}
        </div>
      )}
    </section>
  )
}
