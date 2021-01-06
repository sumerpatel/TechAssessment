import { combineReducers } from 'redux';
import DashboardReducer from '../modules/HomeRoot/Dashboard/reducer';

export default combineReducers({
  DashboardReducer: DashboardReducer,
});
