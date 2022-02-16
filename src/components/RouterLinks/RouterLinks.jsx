import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const RouterLinks = ({ component: Component, ...rest }) => {
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
};

export default RouterLinks;
