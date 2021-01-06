import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';

export class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {};
};

export const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
