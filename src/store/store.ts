import {applyMiddleware, compose, createStore} from 'redux';
import thuck from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const presistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(presistedReducer, compose(applyMiddleware(thuck)));
const persistor = persistStore(store);

export {persistor, store};
