import { UPDATE_USER } from "./userTypes";

const initialState = {
  isLogged: false,
}

export const userReducer = (state = initialState, action:any) => {
  const { type, payload } = action;
  switch(type) {
    case UPDATE_USER: {
      console.log(payload);
      return {
        ...state,
        isLoged: true
      };
    }
    default: {
      return state
    }
  }
}