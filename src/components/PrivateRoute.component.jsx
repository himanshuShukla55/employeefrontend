import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.user.auth);
  return auth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
