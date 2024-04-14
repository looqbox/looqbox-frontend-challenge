import { thunk } from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
}

const rootReducer = combineReducers({})

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['YOUR_NON_SERIALIZABLE_ACTION_TYPE']
      },
      thunk: {
        extraArgument: thunk
      }
    })
})

export type RootState = ReturnType<typeof persistedReducer>

export const persistor = persistStore(store)
