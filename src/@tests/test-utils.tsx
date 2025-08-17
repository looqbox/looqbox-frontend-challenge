import { queryClient } from '@/lib/query-client'
import { store } from '@/lib/store'
import { QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import ptBR from 'antd/locale/pt_BR'
import { type ReactElement } from 'react'
import { render } from '@testing-library/react'

export function renderWithProviders(ui: ReactElement, options?: Parameters<typeof render>[1]) {
    return render(
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ConfigProvider locale={ptBR}>
                    {ui}
                </ConfigProvider>
            </QueryClientProvider>
        </Provider>,
        options,
    )
}
