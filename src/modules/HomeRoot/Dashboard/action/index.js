const namespacer = (namespace) => (action) => {
  return `${namespace}/${action}`;
};

const namespacedAction = namespacer('DashboardReducer');

export const actionTypes = {
  GET_DETAILS: namespacedAction('GET_DETAILS'),
  GET_DETAILS_RESPONSE: namespacedAction('GET_DETAILS_RESPONSE'),
  GET_DETAILS_ERROR: namespacedAction('GET_DETAILS_ERROR'),
};

export const actions = {
  getUserData() {
    return {
      type: actionTypes.GET_DETAILS,
      payload: {},
    };
  },
  updateUserDataResponse(data) {
    return {
      type: actionTypes.GET_DETAILS_RESPONSE,
      data: data,
    };
  },
  updateUserDataError(error) {
    return {
      type: actionTypes.GET_DETAILS_ERROR,
      error: error,
    };
  },
};
