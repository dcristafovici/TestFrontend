import { UPDATE_USER } from "./userTypes";

export const updateUser = (status: boolean) => (dispatch: any) => {
  dispatch({
    type: UPDATE_USER,
    payload: { status },
  });
};