import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, compose(middleware));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
