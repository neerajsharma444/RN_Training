import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store/configureStore';
import AppNavigator from './src/navigation/AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
