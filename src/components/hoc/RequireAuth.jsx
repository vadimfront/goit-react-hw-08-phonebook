import Cookies from 'js-cookie';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const token = Cookies.get('authorization');

  if (!token) {
    return <Navigate to="/register" state={{ from: location }} />;
  }

  return children;
};
