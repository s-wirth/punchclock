import { combineReducers } from 'redux';

import uis, { UIState } from './uiReducers';

const rootReducer = combineReducers({
  uis,
});

export interface ReduxState {
  uis: UIState;
}

export default rootReducer;