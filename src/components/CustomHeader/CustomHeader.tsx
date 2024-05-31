// vendors
import { Flex, Image, Layout, Typography } from 'antd';

// utils
import LogoLooqbox from '../../assets/logo.png';

// styles
import './Header.scss';
import { Link } from 'react-router-dom';

// constants
const { Header } = Layout;

const CustomHeader = () => {
  return (
    <Header className="custom-header">
      <Link to="/home">
        <Flex gap={4} align="center">
          <Image src={LogoLooqbox} width={122} preview={false} />

          <Typography.Title level={2} style={{ margin: 0, color: '#FFFFFF' }}>
            Pokédex
          </Typography.Title>
        </Flex>
      </Link>
    </Header>
  );
};

export default CustomHeader;
