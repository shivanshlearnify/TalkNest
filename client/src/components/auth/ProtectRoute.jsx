import React, { Children } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({children, user, redirect = "/login"}) => {
  if (!user) return <Navigate to={redirect} />;

  return children ? Children : <Outlet/>;
};

export default ProtectRoute;
