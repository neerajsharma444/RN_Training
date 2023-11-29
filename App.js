import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import TodoList from './TodoList';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout = () => {
      SplashScreen.hide();
    };
  }, [1000]);

  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
