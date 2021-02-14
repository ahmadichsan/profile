import { call, put, takeLatest } from 'redux-saga/effects';
import { EXAMPLE_FETCH, fetchExampleFailed, fetchExampleSuccess } from './Example.actions';
import { HttpService } from '../../helpers';
import { EXAMPLEAPI } from './Example.constants';

function* workerSagaExample() {
  try {
    const response = yield call(HttpService.get, EXAMPLEAPI);

    yield put(fetchExampleSuccess(response));
  } catch (error) {
    console.log(error.message);
    yield put(fetchExampleFailed(error.message));
  }
}

export const watcherSagaLogin = [takeLatest(EXAMPLE_FETCH, workerSagaExample)];
