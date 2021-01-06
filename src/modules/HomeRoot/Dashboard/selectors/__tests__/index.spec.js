import { reducer, getDetails } from '../index';

describe('Selectors', () => {
  const state = {
    DashboardReducer: {
      loading: false,
      userData: undefined,
    },
  };

  let result;
  it('should accept the state and return the reducer', () => {
    result = reducer(state);
    expect(result).toEqual(state.DashboardReducer);
  });

  it('should accept the state and return the getDetails', () => {
    result = getDetails(state);
    expect(result).toEqual(state.DashboardReducer.userData);
  });
});
