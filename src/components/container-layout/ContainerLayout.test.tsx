import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContainerLayout from './ContainerLayout';

const Component = () => (
  <BrowserRouter>
    <ContainerLayout />
  </BrowserRouter>
);

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<Component />);
});
