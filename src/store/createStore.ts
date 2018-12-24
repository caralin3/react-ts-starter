import {
  connectRouter,
  routerMiddleware,
  RouterState
} from 'connected-react-router';
import * as History from 'history';
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

export interface ApplicationState {
  router: RouterState;
}

export default (history: History.History): Store<ApplicationState> => {

  const middleware = process.env.NODE_ENV === 'development' ? composeWithDevTools(
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(thunk)
  ) : compose(
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(thunk)
  );

  const rootReducer = combineReducers<ApplicationState>({
    router: connectRouter(history)
  });

  const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  return createStore(persistedReducer, middleware);
};
