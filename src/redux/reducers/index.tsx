import { combineReducers } from 'redux';

import uis, { UIState } from './uiReducers';
import views, { ViewState } from './viewReducers';

const rootReducer = combineReducers({
  uis,
  views,
});

export interface ReduxState {
  uis: UIState;
  views: ViewState;
}

export default rootReducer;
