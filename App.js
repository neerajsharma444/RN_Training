import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import TodoList from './TodoList';
import SplashScreen from 'react-native-splash-screen';
import Hobbies from './Hobbies';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <TodoList />
      <Hobbies />
    </Provider>
  );
};

export default App;
