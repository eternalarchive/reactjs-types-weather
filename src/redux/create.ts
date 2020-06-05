import { createStore, applyMiddleware } from 'redux';
import reducer from './modules/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/saga';

const sagaMiddleware = createSagaMiddleware();

const create = () => {
  const store = createStore(
    reducer(),
    composeWithDevTools(
      applyMiddleware(sagaMiddleware),
    )
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default create;
