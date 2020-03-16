import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import {persistStore} from 'redux-persist';
import Reactotron from './ReactotronConfig.js';

import reducers from './redux/reducer';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(ReduxThunk),
    Reactotron.createEnhancer(),
  ),
);

export default store;
export const Persistor = persistStore(store);
