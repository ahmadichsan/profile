import { all } from 'redux-saga/effects';
import { configSaga } from '../config/Config.sagas';

export function* appSaga() {
  /**
   * previously using if to prevent error in the npm test. Now it disabled until we use saga and see if
   * it still error without if configSaga
   */
  // if (configSaga) yield all(configSaga);
  yield all(configSaga);
}
