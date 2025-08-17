import { Divider, Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { useMemo, type PropsWithChildren } from 'react'
import { HeartOutlined, HomeOutlined } from '@ant-design/icons'
import Logo from "@/assets/logo.svg?react"

const { Header, Content } = Layout

export const AppLayout = ({ children }: PropsWithChildren) => {
    const location = useLocation()

    const selected = useMemo(() => {
        if (location.pathname.startsWith('/favorites')) {
            return ['favorites']
        }
        return ['home']
    }, [location.pathname])

    return (
        <div className='bg-gray-100 min-h-screen'>
            <Header className='sticky top-0 z-50'>
                <div className="flex items-center gap-3 container">
                    <div className='items-center gap-3 hidden sm:flex'>
                        <Link to="/">
                            <Logo className="size-10" />
                        </Link>
                        <Divider type="vertical" className='bg-gray-700 !h-[22px]' />
                    </div>
                    <Menu
                        rootClassName='!px-0'
                        theme="dark"
                        mode="horizontal"
                        className='container'
                        selectedKeys={selected}
                        items={[
                            { key: 'home', label: <Link to="/">Home</Link>, icon: <HomeOutlined /> },
                            { key: 'favorites', label: <Link to="/favorites">Favoritos</Link>, icon: <HeartOutlined /> },
                        ]}
                    />
                </div>
            </Header>
            <Content>
                <div className="container">
                    {children}
                </div>
            </Content>
        </div>
    )
}
