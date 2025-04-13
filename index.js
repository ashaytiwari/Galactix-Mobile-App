/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import store from '@store';

import { name as appName } from './app.json';
import App from './App';

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWrapper);
