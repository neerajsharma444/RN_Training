import React, {useState, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {View, StyleSheet} from 'react-native';
import Animations from './screens/Animations';
import Spinner from './components/Spinner';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    SplashScreen.hide();
    const spinnerTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(spinnerTimeout);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Animations />
      {isLoading && <Spinner />}
    </View>
  );
};

export default App;
