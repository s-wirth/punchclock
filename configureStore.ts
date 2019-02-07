import { createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/redux/reducers';

export default function configureStore(preloadedState = {}) {
  const middleware = [];
  middleware.push(thunk);

  const store = createStore(
    reducers,
    preloadedState,
  );
  return store;
}
