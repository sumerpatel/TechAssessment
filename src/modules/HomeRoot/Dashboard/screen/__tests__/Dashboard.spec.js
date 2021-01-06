import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../Dashboard';

describe('Dashboard view render', () => {
  let wrapper;
  const props = {
    userData: undefined,
    getUserData: jest.fn(),
  };
  beforeEach(() => {
    wrapper = shallow(<Dashboard {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
