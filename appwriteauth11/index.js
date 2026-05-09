/**
 * @format
 */

import { AppRegistry, LogBox, Platform, StatusBar } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Ignore warning logs in development
if (__DEV__) {

  LogBox.ignoreAllLogs();
  
}

// Customize Status Bar
StatusBar.setBarStyle('light-content');
StatusBar.setBackgroundColor('#6200ee');

// Platform check
if (Platform.OS === 'android') {
  console.log('Running on Android');
} else {
  console.log('Running on iOS');
}

// Register Main App
AppRegistry.registerComponent(appName, () => App);