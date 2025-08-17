import { queryClient } from "@/lib/query-client"
import { store, persistor } from "@/lib/store"
import { QueryClientProvider } from "@tanstack/react-query"
import { ConfigProvider } from "antd"
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import ptBR from 'antd/locale/pt_BR'
import { BrowserRouter } from "react-router-dom"
import type { PropsWithChildren } from "react"

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <ConfigProvider locale={ptBR}>
                        <BrowserRouter>
                            {children}
                        </BrowserRouter>
                    </ConfigProvider>
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    )
}