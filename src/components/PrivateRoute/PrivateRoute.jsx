import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.userLogged);
  return user ? children : <Navigate to="/" />;
}
export default PrivateRoute;

