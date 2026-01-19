import { Empty, Flex, Typography } from 'antd'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <Flex align="center" justify="center" style={{ height: '100vh' }}>
      <Empty
        description={
          <Flex vertical align="center" gap={8}>
            <Typography.Title level={2}>404 - Page Not Found</Typography.Title>
            <Typography.Text type="secondary">
              Sorry, the page you are looking for does not exist.
            </Typography.Text>
            <Link to="/">Go back to home</Link>
          </Flex>
        }
      />
    </Flex>
  )
}

export default NotFound
