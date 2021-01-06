import React from 'react';
import { shallow } from 'enzyme';
import Container from '../Container';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const initialState = {};
describe('Container', () => {
  let wrapper, store;
  const props = {};
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Container store={store} {...props} />);
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
