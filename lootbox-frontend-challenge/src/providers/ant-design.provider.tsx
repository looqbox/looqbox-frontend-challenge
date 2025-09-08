import type { ReactNode } from 'react';
import { ConfigProvider } from 'antd';

export function AntDesignProvider({ children }: { children: ReactNode }) {
  return <ConfigProvider>{children}</ConfigProvider>;
}
