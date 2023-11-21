import {AppRegistry} from 'react-native';
// import App from './App';
// import cam from './cam';
// import Action from './Action';
// import TestApi from './TestApi';
// import MyCardApp from './MyCardApp';
import AppCounter from './AppCounter';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppCounter);
