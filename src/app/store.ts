import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import pokemonReducer from '@modules/pokemon/store';
import { configureStore } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, pokemonReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
