import { Flex, Spin } from 'antd';

const Loading: React.FC = () => {
  return (
    <Flex style={{ width: '100%', padding: 16 }} justify="center">
      <Spin />
    </Flex>
  );
};

export default Loading;
