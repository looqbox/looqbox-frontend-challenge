import { RouterProvider } from 'react-router-dom';
import { routes } from '../routes/routes';
import { AntDesignProvider } from './ant-design.provider';
import { QueryProvider } from './query-client.provider';

export function Providers() {
  return (
    <AntDesignProvider>
      <QueryProvider>
        <RouterProvider router={routes} />
      </QueryProvider>
    </AntDesignProvider>
  );
}
