import { CSSProperties } from 'react'
import { Flex, Input } from 'antd'
import useLoading from '../../../hook/useLoading'

interface MyStyles extends CSSProperties {
  container?: CSSProperties
  logo?: CSSProperties
}

function Header() {
  const { loading } = useLoading()

  if (loading) return <></>

  return (
    <Flex vertical justify='center' align='center' style={styles.container}>
      <img src='/src/assets/images/pokedex.png' alt='logo' style={styles.logo} />
    </Flex>
  )
}

export default Header

const styles: MyStyles = {
  container: {
    position: 'fixed',
    zIndex: 1000,
    width: '100%',
    paddingTop: '15px',
    paddingBottom: '15px',
    backgroundColor: '#56BFFF'
  },
  logo: {
    width: '150px'
  }
}
