import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from '../reducer/userReducer';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['userReducer'],
// };

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

// export default store;

const persistConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['userReducer'],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export {store, persistor};
