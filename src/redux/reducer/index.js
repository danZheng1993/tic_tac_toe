import {persistCombineReducers} from 'redux-persist';
import {AsyncStorage} from 'react-native';

import tic from './tic';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default persistCombineReducers(persistConfig, {
  tic,
});
