import { ADD_ALERT, CLEAR_ALERT } from "./Alert.constant";

export const addAlert = () => ({
  type: ADD_ALERT,
});

export const clearAlert = () => ({
  type: CLEAR_ALERT,
});
