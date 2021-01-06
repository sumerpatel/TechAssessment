import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  timeout: null,
  whitelist: ['DashboardReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  if (__DEV__) {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
      persistedReducer,
      composeEnhancers(applyMiddleware(sagaMiddleware, createLogger())),
    );
    const persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    return { store, persistor };
  } else {
    const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
    const persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    return { store, persistor };
  }
}
