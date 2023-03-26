import React from 'react';
import propTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ component, path }) {
  const isLoggedIn = useSelector(state => state.auth.login);
  return isLoggedIn ? <Route component={component} path={path} /> : <Redirect to="/" />;
}

ProtectedRoute.propTypes = {
  component: propTypes.object.isRequired,
  path: propTypes.string.isRequired,
};

export default ProtectedRoute;
