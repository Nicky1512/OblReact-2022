import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

/* const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.userLogged);
  if (user) {
    return (
      <Route>
        <Component {...rest} />
      </Route>
    );
  }
  return (
    <Route>
      <Navigate to="/login" />
    </Route>
  );
}; */

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.userLogged);
  return user ? children : <Navigate to="/" />;
}
export default PrivateRoute;

