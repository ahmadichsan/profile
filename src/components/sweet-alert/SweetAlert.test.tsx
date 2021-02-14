import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { initialState } from '../../constants';
import SweetAlert from './SweetAlert';

const mockStore = configureMockStore();
const store = mockStore({ sweetAlert: initialState });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <SweetAlert />
    </Provider>,
    div
  );
});
