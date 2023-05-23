import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        authenticated ? (
          <Component />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  );
};

export default ProtectedRoute;
