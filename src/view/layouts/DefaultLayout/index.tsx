import { Flex } from 'antd'
import { Link, Outlet } from 'react-router-dom'

import PokeLogo from '../../../assets/icons/PokeLogo'
import { GithubOutlined } from '@ant-design/icons'

import './_styles.scss'

export default function DefaultLayout () {
  return (
        <>
            <header>
                <Flex justify="space-between" align="center">
                    <Link to="/"><PokeLogo /></Link>
                    <a
                        href="https://github.com/joaobelarmino"
                        target='_blank'
                        rel="noreferrer"
                    >
                        <small><GithubOutlined />/joaobelarmino</small>
                    </a>
                </Flex>
            </header>
            <Outlet />
        </>
  )
}
