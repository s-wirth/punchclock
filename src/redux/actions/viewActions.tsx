export enum ActionType {
  ShowLoggerView = 'SHOW_LOGGER_VIEW',
}

export function ShowLoginComponent() {
  return (dispatch: any) => {
    dispatch({
      type: ActionType.ShowLoggerView,
    });
  };
}
