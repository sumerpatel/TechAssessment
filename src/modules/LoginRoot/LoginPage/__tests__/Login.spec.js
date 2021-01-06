import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login';

describe('Login view render', () => {
  let wrapper;
  const props = {};
  beforeEach(() => {
    wrapper = shallow(<Login {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
