import { Collapse } from 'antd'
import { useState } from 'react'
import type { Moves } from '../api/pokemon'
import { PokemonMoveDetails } from './PokemonMoveDetails'

const { Panel } = Collapse

export const PokemonMoviments = ({ moves }: { moves: Moves[] }) => {
  const [activeKey, setActiveKey] = useState<string | string[]>([])

  return (
    <Collapse accordion activeKey={activeKey} onChange={setActiveKey}>
      <Panel
        header={
          <div className=" text-center font-bold text-lg">
            Moviments ({moves.length})
          </div>
        }
        key="movements"
      >
        <Collapse accordion>
          {moves.map((move, index) => (
            <Panel
              header={
                <span className="capitalize font-medium">
                  {move.move.name.replace(/-/g, ' ')}
                </span>
              }
              key={index}
            >
              <PokemonMoveDetails
                url={move.move.url}
                versionDetails={move.version_group_details}
              />
            </Panel>
          ))}
        </Collapse>
      </Panel>
    </Collapse>
  )
}
