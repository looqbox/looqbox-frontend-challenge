import { createUseStyles } from 'react-jss'

import { Flex, Layout, Typography } from 'antd'

import { Container } from '@/components/container'
import { breakpoints } from '@/styles/theme'

const useStyles = createUseStyles({
  root: {
    backgroundColor: '#EFF3F6',
    paddingTop: '6.7rem',
    paddingBottom: '6.5rem',

    [breakpoints.sm]: {
      padding: '4rem 0',
    },
  },
  container: {
    [breakpoints.sm]: {
      flexDirection: 'column',
    },
  },
  textContent: {
    [breakpoints.sm]: {
      textAlign: 'center',
      marginBottom: '4rem',
    },

    '&>h4': {
      fontWeight: 'bold',
      fontSize: '1.8rem',
      lineHeight: '180%',
    },
    '&>span': {
      fontWeight: 500,
      opacity: 0.8,
    },
  },
  logo: {
    '&>img': {
      maxWidth: 120,
    },
  },
})

export function Footer() {
  const styles = useStyles()

  return (
    <Layout.Footer className={styles.root}>
      <Flex
        component={Container}
        align="center"
        justify="space-between"
        className={styles.container}
      >
        <div className={styles.textContent}>
          <Typography.Title level={4}>
            Looqbox FrontEnd Challenge
          </Typography.Title>
          <Typography.Text>
            © {new Date().getUTCFullYear()} Vinícius Fernandes
          </Typography.Text>
        </div>

        <a
          href="https://looqbox.com"
          rel="noreferrer"
          target="_blank"
          className={styles.logo}
        >
          <img src="/images/looqbox-logo.svg" alt="LooqBox" title="LooqBox" />
        </a>
      </Flex>
    </Layout.Footer>
  )
}
