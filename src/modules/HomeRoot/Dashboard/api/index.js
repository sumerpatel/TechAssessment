import CommonService from '../../../../service';

export default class DashboardApi extends CommonService {
  async getUserDataCall() {
    try {
      const url = 'https://itunes.apple.com/search?term=jack+johnson';
      return this.get(url);
    } catch (error) {
      throw error;
    }
  }
}

export const dashboardService = new DashboardApi();
