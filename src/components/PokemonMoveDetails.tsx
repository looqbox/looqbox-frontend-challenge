import type { Moves } from '../api/pokemon'
import { LoadingIcon } from './icons/LoadingIcon'
import { BadgeType } from './BadgeType'
import { Card } from 'antd'
import { InfoBlock } from './InfoBlock'
import { usePokemonMovesDetails } from '../hooks/useGetPokemonMovesDetails'

export const PokemonMoveDetails = ({
  url,
  versionDetails,
}: {
  url: string
  versionDetails: Moves['version_group_details']
}) => {
  const { data, isLoading, isError } = usePokemonMovesDetails(url)

  if (isLoading) {
    return (
      <div className="flex justify-center py-4">
        <LoadingIcon />
      </div>
    )
  }

  if (isError || !data) {
    return <p className="text-red-500 text-sm">Failed to load move details</p>
  }

  const effect =
    data.effect_entries.find((e) => e.language.name === 'en')?.short_effect ||
    'No description available'

  return (
    <div className="!space-y-4">
      <Card className="!bg-gray-50 p-3 !shadow">
        <div className="flex items-center justify-end gap-1">
          <div className="rounded-lg border-2 px-2 py-1">
            <p className="">{data.damage_class.name}</p>
          </div>

          <BadgeType type={data.type.name} />
        </div>

        <div className="flex flex-wrap text-sm mb-2">
          <InfoBlock label="Power" value={data.power ?? 'N/A'} />
          <InfoBlock label="Accuracy" value={data.accuracy ?? 'N/A'} />
          <InfoBlock label="PP" value={data.pp ?? 'N/A'} />
        </div>

        <p className="font-semibold mt-4">{effect}</p>
      </Card>

      <div>
        <p className="font-semibold text-sm mb-2">How to learn:</p>
        <div className="space-y-2">
          {versionDetails.map((detail, idx) => (
            <div
              key={idx}
              className="flex justify-between text-sm border-b pb-2 border-[#bdbdbd]"
            >
              <span className="opacity-70">
                <span className="capitalize font-bold">
                  {detail.move_learn_method.name.replace(/-/g, ' ')} (
                  {detail.version_group.name.replace(/-/g, ' ')})
                </span>
              </span>
              <span className="opacity-70">
                Level:
                <span className="font-bold">
                  {detail.level_learned_at || 'N/A'}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
