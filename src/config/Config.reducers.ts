/*
 * Examples:
 * import { ReducerSome } from '../modules/auth/ReducerSome';
 * const reducers: object = {
 *   some: ReducerSome,
 * };
 * export default reducers;
 */

import { sweetAlertReducer } from '../redux-global/Global.reducers';

export const configReducer = {
  sweetAlert: sweetAlertReducer,
};
