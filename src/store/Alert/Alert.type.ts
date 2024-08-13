import { ADD_ALERT, CLEAR_ALERT } from "./Alert.constant";

export type AlertState = {
  isAlert: boolean;
};

export interface IAddAlert {
  type: typeof ADD_ALERT;
}

export interface IClearAlert {
  type: typeof CLEAR_ALERT;
}

export type AlertActionsTypes = IAddAlert | IClearAlert;
