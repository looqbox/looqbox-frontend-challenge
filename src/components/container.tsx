import { createUseStyles } from 'react-jss'

import { Layout } from 'antd'
import clsx from 'clsx'

import { breakpoints } from '@/styles/theme'

const useStyles = createUseStyles({
  root: {
    width: '100%',
    maxWidth: '123.7rem',
    margin: '0 auto',

    [breakpoints.xl]: {
      maxWidth: '123.7rem',
      padding: '0 2.4rem',
    },
  },
})

interface ContainerProps extends React.ComponentProps<'div'> {}

export function Container({ className, ...props }: ContainerProps) {
  const styles = useStyles()

  return <Layout.Content className={clsx(styles.root, className)} {...props} />
}
