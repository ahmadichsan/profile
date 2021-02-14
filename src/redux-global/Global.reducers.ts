import { Action, AlertState } from '../interfaces';
import {
  initialAction,
  defaultSweetAlertState,
} from '../constants';
import {
  SHOW_SWEET_ALERT,
  CONFIRM_SWEET_ALERT,
  CANCEL_SWEET_ALERT,
  INITIAL_SWEET_ALERT,
} from './Global.actions';

export function sweetAlertReducer(state: AlertState = { ...defaultSweetAlertState }, action: Action = initialAction) {
  switch (action.type) {
    case SHOW_SWEET_ALERT:
      return {
        ...state,
        data: action.data,
        action: action.type,
      };
    case CONFIRM_SWEET_ALERT:
    case INITIAL_SWEET_ALERT:
    case CANCEL_SWEET_ALERT:
      return {
        ...state,
        action: action.type,
      };

    default:
      return state;
  }
}
