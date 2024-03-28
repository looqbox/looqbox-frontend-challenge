
import { Layout, Menu } from 'antd/lib';
const { Header } = Layout;
import HomeOutlined from '@ant-design/icons/HomeOutlined';
import AreaChartOutlined from '@ant-design/icons/AreaChartOutlined';
import { MenuProps } from 'antd/lib/menu';

const items: MenuProps['items'] = [{
  label: "Home",
  key: "",
  icon: <HomeOutlined/>
}, {
  label: "Estatísticas",
  key: "/charts",
  icon: <AreaChartOutlined/>
}];

const onClick: MenuProps['onClick'] = (e) => {
  window.location.href = e.key;
};

export default function StyledHeader() {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['']} onClick={onClick} items={items}/>
    </Header>
  );
}