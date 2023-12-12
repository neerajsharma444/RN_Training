import {useEffect} from 'react';
import PharmacyData from './Pharmacy/PharmacyData';
import SplashScreen from 'react-native-splash-screen';
import {View} from 'react-native';
import Home from './src/screens/Home';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View>
      {/* <PharmacyData /> */}
      <Home />
    </View>
  );
};

export default App;
