import { ActionType } from '../actions/uiActions';

export interface UIState {
  anExampleBoolean: boolean;
}

const initialState: UIState = {
  anExampleBoolean: false
};

export default function (state = initialState, action: any): UIState {
  switch (action.type) {
    case ActionType.AnActionType:
      return {
        anExampleBoolean: !state.anExampleBoolean,
      };
    default:
      return state;
  }
}