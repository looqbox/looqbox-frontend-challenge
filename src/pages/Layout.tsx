import { Outlet, useLocation, Link } from 'react-router-dom'
import { Layout as AntLayout, Row, Col } from 'antd'
import { PokemonSearch } from '../components/PokemonSearch'

const { Header, Content, Footer } = AntLayout

export default function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <AntLayout className="min-w-screen !min-h-screen">
      <Header className="!bg-gradient-to-r !from-[#40da62] !to-[#6d6e71] text-white flex items-center justify-center !py-4 !h-auto">
        <div className="w-full max-w-[1144px] px-4 sm:px-6 md:px-10">
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} md={8} className="flex ">
              <Link
                to="/"
                className="flex-1 flex justify-center md:justify-start"
              >
                <img src="/logo-looqdex.png" className="max-h-10" />
              </Link>
            </Col>

            <Col xs={24} md={8} className="flex justify-center">
              <div className="w-full flex justify-center">
                {!isHome && <PokemonSearch redirectToHome={true} />}
              </div>
            </Col>
          </Row>
        </div>
      </Header>

      <Content className="px-4 sm:px-6 md:px-10 py-6 max-w-[1144px]  mx-auto w-full flex flex-col">
        <Outlet />
      </Content>
      <Footer className="text-center">
        <p>© {new Date().getFullYear()} - Rodrigo Andrade</p>
      </Footer>
    </AntLayout>
  )
}
