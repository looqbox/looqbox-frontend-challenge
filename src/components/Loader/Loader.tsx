import { Spin } from 'antd';
import { LoaderProps } from './Loader.interface';

import './index.css';

export const Loader = ({ isLoading }: LoaderProps) => {
  return (
    isLoading && (
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    )
  );
};
