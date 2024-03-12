import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

import { getPokemon } from '@/api/getPokemon'
import { Loader } from '@/components/loader'
import { Badge } from '@/components/ui/badge'

type UseParamsTypes = {
  id: string
}

export const Pokemon = () => {
  const { id } = useParams<UseParamsTypes>()

  const { data: pokemon, isLoading } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => getPokemon(id),
  })

  return (
    <>
      <Helmet title={pokemon?.data.name} />

      {isLoading ? (
        <Loader />
      ) : (
        <section className="mx-auto grid min-h-screen max-w-[1400px] grid-cols-4 items-start justify-center gap-12">
          <div className="col-span-1 flex flex-col justify-center gap-8 rounded-lg border-2 p-4">
            <img
              src={pokemon?.data.sprites.other.home.front_default}
              className="h-96 w-96 object-contain"
              alt=""
            />

            <div className="flex flex-col gap-2">
              <strong className="border-b pb-2 tracking-tight">Stats</strong>

              {pokemon?.data.stats.map(
                (item: { stat: { name: string }; base_stat: string }) => {
                  return (
                    <p
                      key={crypto.randomUUID()}
                      className="flex flex-1 justify-between"
                    >
                      <strong className="capitalize tracking-tight">
                        {item.stat?.name}:
                      </strong>
                      <span className=" tracking-tigh">{item?.base_stat}</span>
                    </p>
                  )
                }
              )}
            </div>

            <div className="flex flex-col gap-2">
              <strong className="border-b pb-2 tracking-tight">Type:</strong>

              <div className="flex gap-2">
                {pokemon?.data.types.map((item) => {
                  return (
                    <Badge
                      key={crypto.randomUUID()}
                      className="capitalize tracking-tight text-white"
                    >
                      {item.type?.name}
                    </Badge>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <strong className="border-b pb-2 tracking-tight">Ability:</strong>

              <div className="flex gap-2">
                {pokemon?.data.abilities.map((item) => {
                  return (
                    <Badge
                      variant={'secondary'}
                      key={crypto.randomUUID()}
                      className="capitalize tracking-tight text-white"
                    >
                      {item.ability?.name}
                    </Badge>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="col-span-3 flex flex-col gap-4 rounded-lg border-2 p-4">
            <h2 className="scroll-m-20 border-b pb-4 text-3xl font-semibold capitalize tracking-tight first:mt-0">
              {pokemon?.data.name}
            </h2>

            <p className="tracking-tight">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <p className="tracking-tight">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>

            <div className="w-full">
              <div className="flex flex-col gap-2">
                <strong className="border-b pb-2 tracking-tight">Moves</strong>

                <div className="flex flex-wrap gap-2">
                  {pokemon?.data.moves.map(
                    (item: { move: { name: string } }) => {
                      return (
                        <Badge
                          variant={'outline'}
                          key={crypto.randomUUID()}
                          className="capitalize tracking-tight text-white"
                        >
                          {item.move.name}
                        </Badge>
                      )
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
