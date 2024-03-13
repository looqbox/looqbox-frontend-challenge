import { Flex } from 'antd'

import unexpectedErrorIllustration from '../../../assets/illustrations/unexpected-error.svg'

import './_styles.scss'

export function ScreenError ({ children }: { children: React.ReactNode }) {
  return (
    <Flex justify='center' align='center' className="error-screen" vertical>
        <img src={unexpectedErrorIllustration} />

        <div className="error-screen__content">
            {children}
        </div>
    </Flex>
  )
}
