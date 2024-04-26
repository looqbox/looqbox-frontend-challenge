import { useNavigate } from 'react-router-dom';
import { Button, Flex, Typography } from 'antd';

const { Title } = Typography;

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Flex vertical justify="center" align="center">
      <Title>Pokédex</Title>
      <Flex align="center" justify="center" style={{ marginBottom: 30 }}>
        <Button type="primary" onClick={() => navigate('/')}>
          Back to main page
        </Button>
      </Flex>
    </Flex>
  );
};
