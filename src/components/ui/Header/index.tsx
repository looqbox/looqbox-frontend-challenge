import { Layout, Menu } from 'antd/lib';
import { useRouter } from 'next/router';
import HomeOutlined from '@ant-design/icons/HomeOutlined';
import StarOutlined from '@ant-design/icons/StarOutlined';
import { useDispatch } from 'react-redux';
import { removePokemon } from '@/modules/pokemon/store';

const { Header } = Layout;

export default function StyledHeader() {
  const router = useRouter();
  const dispatch = useDispatch();

  const items = [
    {
      label: "Home",
      key: "/",
      icon: <HomeOutlined/>
    },
    {
      label: "Favorites",
      key: "/favorites",
      icon: <StarOutlined />
    }
  ];

  const onClick = (e: any) => {
    dispatch(removePokemon());
    router.push(e.key);
  };

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[router.pathname]} onClick={onClick}>
        {items.map(item => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
}