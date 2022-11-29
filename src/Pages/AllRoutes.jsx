import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../Components/ProtectedRoutes";
import Login from "./Login";
import Storage from "./Storage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <Storage></Storage>
          </ProtectedRoutes>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default AllRoutes;
