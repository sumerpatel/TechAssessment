import { get } from 'lodash';

export const reducer = (state) => {
  return get(state, 'DashboardReducer', {});
};

export const getDetails = (state) => {
  const data = reducer(state);
  return get(data, 'userData', undefined);
};
