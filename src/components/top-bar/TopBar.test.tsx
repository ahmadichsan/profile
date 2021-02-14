import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import TopBar from './TopBar';

const mockStore = configureMockStore();
const store = mockStore();

const Component = () => (
  <Provider store={store}>
    <BrowserRouter>
      <TopBar />
    </BrowserRouter>
  </Provider>
);

const renderNavigationBar = () => {
  return render(<Component />);
};

describe('<NavigationBar />', () => {
  it('renders without crashing', () => {
    renderNavigationBar();
  });

  test('should allow toggle', done => {
    const { container } = renderNavigationBar();
    const toggle = getByTestId(container as HTMLElement, 'navbar-toggler');
    const toggleValue = getByTestId(container as HTMLElement, 'navbar-collapse');
    fireEvent.click(toggle);
    expect(toggleValue.getAttribute('class')).toContain('collapsing');

    done();
  });
});
