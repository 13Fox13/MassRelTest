import {AppRegistry} from 'react-native';
import MainScreen from './src/components/MainScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainScreen);
