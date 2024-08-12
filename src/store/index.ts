import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./Root.reducer";
import { rootSagas } from "./Root.saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window !== "undefined" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const bindMiddleware = composeEnhancers(applyMiddleware(sagaMiddleware));

const initStore = createStore(rootReducer, bindMiddleware);

sagaMiddleware.run(rootSagas);

export default initStore;
