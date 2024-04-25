import { CSSProperties } from 'react'
import { Flex } from 'antd'
import useLoading from '../../../hook/useLoading'

interface MyStyles extends CSSProperties {
  container?: CSSProperties
  logo?: CSSProperties
  text?: CSSProperties
  link?: CSSProperties
}

function Footer() {
  const { loading } = useLoading()

  if (loading) return <></>

  return (
    <Flex vertical justify='center' align='center' style={styles.container}>
      <div style={styles.text}>
        Built using{' '}
        <a
          style={styles.link}
          href='https://pokeapi.co/'
          target='_blank'
          rel='noopener noreferrer'
        >
          PokeAPI
        </a>
        ,{' '}
        <a
          style={styles.link}
          href='https://reactjs.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          React
        </a>
        ,{' '}
        <a
          style={styles.link}
          href='https://redux.js.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Redux
        </a>{' '}
        and{' '}
        <a
          style={styles.link}
          href='https://ant.design/'
          target='_blank'
          rel='noopener noreferrer'
        >
          AntDesign
        </a>
        .
      </div>
      <img src='/src/assets/images/github.png' alt='logo' style={styles.logo} />
    </Flex>
  )
}

export default Footer

const styles: MyStyles = {
  container: {
    position: 'fixed',
    zIndex: 10000,
    bottom: '0',
    width: '100%',
    paddingBottom: '15px'
  },
  logo: {
    width: '30px'
  },
  text: {
    fontSize: '10px',
    marginBottom: '10px'
  },
  link: {
    color: '#000',
    textDecoration: 'none'
  }
}
