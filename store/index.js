import { createStore,applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'


import rootReducer from '../reducers';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
  

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

const persistor = persistStore(store)


export  { store, persistor };