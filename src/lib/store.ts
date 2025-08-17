import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favoritesReducer from '@/lib/slices/favorites-slice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({ favorites: favoritesReducer })

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favorites']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefault => getDefault({ serializableCheck: false })
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
