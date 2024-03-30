import { Flex, Spin } from 'antd/lib';

type LoadingProps = {
    text?: string;
}

export default function Loading({text}: LoadingProps) {
  return (
    <Flex vertical align='center' style={{
      height: '80vh',
      justifyContent: 'center'
    }}>
      <h2>{text || 'Loading...'}</h2>
      <Spin />
    </Flex>
  );
}