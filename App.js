import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Animations from './screens/Animations';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Animations />;
};

export default App;
