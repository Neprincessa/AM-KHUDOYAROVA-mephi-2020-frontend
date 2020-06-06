import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function (ComposedComponent) {
  class RequireAuth extends Component {
    render() {
      return this.props.isAuth ? (
        <ComposedComponent {...this.props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
          }}
        />
      );
    }
  }

  const mapStateToProps = (state) => {
    return { isAuth: state.authUser.isAuth };
  };
  return connect(mapStateToProps)(RequireAuth);
}
