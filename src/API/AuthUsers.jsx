import React from 'react';
import { Navigate } from 'react-router-dom';
import User from '../Components/user';

const AuthUsers = () => {
  const token = localStorage.getItem("token");
  return token ? <User /> : <Navigate to="/login" replace />;
};

export default AuthUsers;
