import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import VideosReducer from './videos/reducer';

const rootReducer = combineReducers({videos: VideosReducer})

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['videos'],
  backlist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer)

const persistor = persistStore(store);

export {store, persistor}
