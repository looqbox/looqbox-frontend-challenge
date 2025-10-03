import { Col, Row } from 'antd'
import { getTypes } from '../utils/getTypes'
import { calculateTypeEffectiveness } from '../utils/getTypeEffectiveness'
import type { TypeDetail } from '../api/types'
import { BadgeType } from './BadgeType'

const getDiagonalColor = (multiplier: number) => {
  if (multiplier === 4) return 'bg-[#7c0000]'
  if (multiplier === 2) return 'bg-[#a40000]'
  if (multiplier === 0) return 'bg-[#2e3436]'
  if (multiplier === 0.5) return 'bg-[#4e9a06]'
  if (multiplier === 0.25) return 'bg-[#73d216]'
  return ''
}

export const PokemonEffectivenessTable = ({
  types,
}: {
  types: TypeDetail[]
}) => {
  const effectivenessMap = calculateTypeEffectiveness(types)

  return (
    <Row gutter={[16, 24]}>
      {getTypes.map((type) => {
        const multiplier = effectivenessMap[type] ?? 1
        const diagonalColor = getDiagonalColor(multiplier)

        return (
          <Col
            xs={12}
            sm={8}
            md={6}
            lg={4}
            xl={3}
            key={type}
            className="flex justify-center"
          >
            <div className="relative flex flex-col items-center p-2 rounded shadow bg-gray-50 w-full text-center overflow-hidden">
              <BadgeType type={type} />
              <p className="text-sm opacity-80 font-semibold mt-1">
                {multiplier}x
              </p>

              {diagonalColor && (
                <div
                  className={`absolute -bottom-6 -left-10 w-20 h-2 rotate-45 origin-bottom-right ${diagonalColor}`}
                />
              )}
            </div>
          </Col>
        )
      })}
    </Row>
  )
}
