import reducer from '../index';
import { actionTypes } from '../../action';

describe('reducer', () => {
  const initialState = {
    loading: false,
    userData: undefined,
  };

  it('Should return intial state', () => {
    const result = reducer(
      {
        loading: false,
        userData: undefined,
      },
      { type: 'default' },
    );
    expect(result).toEqual(initialState);
  });

  it('Should return GET_DETAILS', () => {
    const result = reducer(undefined, {
      type: actionTypes.GET_DETAILS,
    });
    const expected = {
      ...initialState,
      loading: true,
    };
    expect(result).toEqual(expected);
  });

  it('Should return GET_DETAILS_RESPONSE', () => {
    const result = reducer(undefined, {
      type: actionTypes.GET_DETAILS_RESPONSE,
    });
    const expected = {
      ...initialState,
      loading: false,
      userData: undefined,
    };
    expect(result).toEqual(expected);
  });

  it('Should return GET_DETAILS_ERROR', () => {
    const result = reducer(undefined, {
      type: actionTypes.GET_DETAILS_ERROR,
    });
    const expected = {
      ...initialState,
      loading: false,
      userData: undefined,
    };
    expect(result).toEqual(expected);
  });
});
