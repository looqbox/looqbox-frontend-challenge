import { CSSProperties } from 'react'
import { Image, Flex } from 'antd'
import useLoading from '../../hook/useLoading'

interface MyStyles extends CSSProperties {
  container?: CSSProperties
  text?: CSSProperties
}

function Loading() {
  const { loading } = useLoading()

  if (!loading) return <></>

  return (
    <Flex vertical justify='center' align='center' style={styles.container}>
      <p style={styles.text}>Carregando</p>
      <img
        src='https://i.gifer.com/VgI.gif'
        alt='loading-gif'
        style={{ width: '100px', height: '100px' }}
      />
    </Flex>
  )
}

export default Loading

const styles: MyStyles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  text: {
    fontSize: '12px'
  }
}
