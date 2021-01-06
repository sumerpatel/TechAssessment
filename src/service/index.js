import axios from 'axios';

export default class CommonService {
  async get(api) {
    try {
      const response = await axios.get(api);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
