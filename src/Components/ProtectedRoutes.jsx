import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const ProtectedRoutes = ({ children }) => {
  const { isAuth, currentUser } = useContext(AuthContext);
  if (currentUser == null) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return children;
};

export default ProtectedRoutes;
