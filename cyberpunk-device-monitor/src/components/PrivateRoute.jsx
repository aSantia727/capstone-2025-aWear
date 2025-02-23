// PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import 'react';

const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  if (!auth.token) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;