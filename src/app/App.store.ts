import { createStore, applyMiddleware, compose, Store } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { Persistor } from 'redux-persist/es/types';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { reduxReducer } from './App.reducers';
import { appSaga } from './App.sagas';
import { configPersist } from '../config';

const finalReducers = persistReducer(configPersist, reduxReducer);
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const middlewares = process.env.NODE_ENV === 'development' ? [sagaMiddleware, logger] : [sagaMiddleware];

const reduxStore = createStore(finalReducers, composeEnhancer(applyMiddleware(...middlewares))) as Store;

sagaMiddleware.run(appSaga);

/**
 * note: idk, without "unknown", it will compiled error with error:
 * Conversion of type 'import("redux-persist").Persistor' to type 'import("redux-persist/es/types").Persistor'
 * may be a mistake because neither type sufficiently overlaps with the other. If this was intentional,
 * convert the expression to 'unknown' first.
 * 
 * this is related to this PR: https://github.com/rt2zz/redux-persist/pull/1085#issue-315212260
 * 
 * if the PR already merged, the type assignment in line 24 and line 39 can be omitted.
 */

const persistor = persistStore(reduxStore) as unknown as Persistor;
const store = reduxStore;

export { persistor, store };
