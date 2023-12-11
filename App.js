import {useEffect} from 'react';
import PharmacyData from './Pharmacy/PharmacyData';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <PharmacyData />;
};

export default App;
