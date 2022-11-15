import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  //waiting for getting user data
  if (loading) {
    return (
      <p className="w-full text-blue-500 normal-case btn btn-ghost border-none loading">
        Loading...
      </p>
    );
  }

  //access for valid user only
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  } else {
    return children;
  }
};

export default PrivetRoute;
