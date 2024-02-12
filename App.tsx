import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/configureStore';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </>
  );
};

export default App;
