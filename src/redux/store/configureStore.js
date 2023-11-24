import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from '../reducer/userReducer';
import logger from 'redux-logger';

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

const persistConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['userReducer'],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  // user,
});

const persistor = persistStore(store);

export {store, persistor};
