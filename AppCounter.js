import store from './src/store/configureStore';
import {ReduxDemo} from './src/screen/reduxDemo/ReduxDemo';
import {Provider} from 'react-redux';

const AppCounter = () => {
  return (
    <Provider store={store}>
      <ReduxDemo />
    </Provider>
  );
};

export default AppCounter;
