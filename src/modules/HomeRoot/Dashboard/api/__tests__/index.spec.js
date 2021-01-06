import 'react-native';
import DashboardApi from '../';

jest.mock('../index');
const mockFun = jest.fn();
const dashboardService = new DashboardApi();

describe('Access DashboardApi Api', function () {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should response success with getUserDataCall', async () => {
    dashboardService.getUserDataCall = mockFun.mockImplementationOnce(() =>
      Promise.resolve(undefined),
    );
    const action = {
      payload: {},
      type: 'DashboardReducer/GET_DETAILS',
    };
    await dashboardService.getUserDataCall(action).then((response) => {
      expect(response).toEqual(undefined);
    });
    expect(dashboardService.getUserDataCall).toBeCalledTimes(1);
  });
});
