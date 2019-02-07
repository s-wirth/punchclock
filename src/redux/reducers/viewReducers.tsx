import { ActionType } from '../actions/viewActions';

export enum Views {
  Logger = 'LOGGER_VIEW',
}

export interface ViewState {
  activeView: string,
}

const initialState: ViewState = {
  activeView: Views.Logger,
};

export default function (state = initialState, action: any): ViewState {
  switch (action.type) {
    case ActionType.ShowLoggerView:
      return {
        activeView: Views.Logger,
      };
    default:
      return state;
  }
}
