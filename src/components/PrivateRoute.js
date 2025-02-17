import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// PrivateRoute Component for protecting routes
const PrivateRoute = ({ element }) => {
  const isLoggedIn = useSelector((state) => state.userInfo.user.login); // Check if user is logged in

  // If user is not logged in, redirect to login page
  if (!isLoggedIn) {
    alert("Login First!!");
    return <Navigate to="/" />;
  }

  return element; // If logged in, render the component (element) passed to PrivateRoute
};

export default PrivateRoute;
