/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import TabNavigation from './TabNavigation';
// import App from './App';
import NestDrawerNav from './NestDrawerNav';
// import Navigation from './Navigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => NestDrawerNav);
