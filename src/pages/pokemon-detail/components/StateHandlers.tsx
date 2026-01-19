import { LoadingOutlined } from '@ant-design/icons'
import { Empty, Flex, Spin, Typography } from 'antd'

const StateHandlers = ({
  isError,
  isLoading
}: {
  isError: boolean
  isLoading: boolean
}) => {
  if (isLoading) {
    return (
      <Flex
        vertical
        justify="center"
        align="center"
        style={{ height: '100vh' }}
      >
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </Flex>
    )
  }

  if (isError)
    return (
      <Flex
        vertical
        align="center"
        justify="center"
        style={{ height: '100vh' }}
      >
        <Empty
          description={
            <Flex align="center" justify="center" vertical gap={8}>
              <Typography.Title level={4} type="secondary">
                Oh no! This Pokémon tried to use "Load data"—but it missed!
              </Typography.Title>
              <Typography.Text type="secondary">
                Please try again in a few moments.
              </Typography.Text>
            </Flex>
          }
        />
      </Flex>
    )

  return null
}

export default StateHandlers
