import {
  GithubOutlined,
  LinkOutlined,
  MenuOutlined,
  PoweroffOutlined,
  QqOutlined,
} from '@ant-design/icons'
import { Button, Drawer, Menu } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export function HamburgerMenu() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <Button
        type='text'
        icon={<MenuOutlined className='text-white! text-2xl!' />}
        onClick={() => setOpen(true)}
        className='bg-blue-500! rounded-tr-none! rounded-bl-none! hover:scale-110! transition-transform! focus:outline-none! shadow!'
      />

      <Drawer
        title='Menu'
        placement='left'
        onClose={() => setOpen(false)}
        open={open}
      >
        <Menu
          mode='vertical'
          items={[
            {
              key: 'pokemons',
              label: 'Pokemons',
              icon: <QqOutlined />,
              onClick: () => {
                navigate('/pokemons')
              },
            },
            {
              key: 'repository',
              label: 'Repository',
              icon: <GithubOutlined />,
              onClick: () => {
                window.open(
                  'https://github.com/NattanSilva/looqbox-frontend-challenge',
                  '_blank',
                )
              },
            },
            {
              key: 'api-docs',
              label: 'API Docs',
              icon: <LinkOutlined />,
              onClick: () => {
                window.open('https://pokeapi.co/docs/v2/', '_blank')
              },
            },
            {
              key: 'exit',
              label: 'Exit',
              icon: <PoweroffOutlined />,
              onClick: () => {
                navigate('/')
              },
            },
          ]}
          onClick={() => setOpen(false)}
        />
      </Drawer>
    </>
  )
}
