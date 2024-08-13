import { ADD_ALERT, CLEAR_ALERT } from "./Alert.constant";
import { AlertActionsTypes, AlertState } from "./Alert.type";

const initialState: AlertState = {
  isAlert: false,
};

export const alertReducer = (
  state = initialState,
  action: AlertActionsTypes
): AlertState => {
  switch (action.type) {
    case ADD_ALERT:
      return {
        ...state,
        isAlert: true,
      };
    case CLEAR_ALERT:
      return initialState;
    default:
      return state;
  }
};
