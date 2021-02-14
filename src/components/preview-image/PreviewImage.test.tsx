import React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store';
import PreviewImage from './PreviewImage';

const mockStore = configureMockStore();
const store = mockStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <PreviewImage fileName="Example.png" />
    </Provider>,
    div
  );
});
