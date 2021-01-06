import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { actions } from '../action';
import { getDetails } from '../selectors';

export class DashboardContainer extends React.Component {
  render() {
    return <Dashboard {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    userData: getDetails(state),
  };
};

export const mapDispatchToProps = (dispatch) => ({
  getUserData: () => dispatch(actions.getUserData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
