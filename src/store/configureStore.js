// import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterReducer';

// Passing counterReducer to createStore
const store = configureStore({
  reducer: counterReducer,
});
// const store = createStore(counterReducer);

export default store;
