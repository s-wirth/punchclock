export enum ActionType {
  AnActionType = 'AN_ACTION_TYPE',
}

export function dispatchAnAction() {
  return (dispatch: any) => {
    dispatch({
      type: ActionType.AnActionType,
    });
  };
}