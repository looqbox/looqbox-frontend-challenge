import { Flex } from 'antd'
import Pokeball from '../../../assets/icons/PokeBall'

import './_styles.scss'

export function ScreenLoader () {
  return (
    <Flex justify='center' align='center' className="loading-screen">
        <Pokeball />
    </Flex>
  )
}
