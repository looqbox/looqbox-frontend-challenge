
import { Layout, Menu } from 'antd/lib';
const { Header } = Layout;
import HomeOutlined from '@ant-design/icons/HomeOutlined';
import StarOutlined from '@ant-design/icons/StarOutlined';
import { MenuProps } from 'antd/lib/menu';

const items: MenuProps['items'] = [{
  label: "Home",
  key: "",
  icon: <HomeOutlined/>
}, {
  label: "Favorites",
  key: "/favorites",
  icon: <StarOutlined />
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