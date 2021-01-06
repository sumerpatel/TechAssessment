import { actionTypes } from '../action';

const initialState = {
    loading: false,
    userData: undefined,
};

export const DashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DETAILS:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_DETAILS_RESPONSE:
      return {
        ...state,
        loading: false,
        userData: action.data,
      };
    case actionTypes.GET_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        userData: action.error,
      };

    default:
      return state;
  }
};
export default DashboardReducer;
