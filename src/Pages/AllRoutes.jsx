import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../Components/ProtectedRoutes";
import Login from "./Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <>storage</>
          </ProtectedRoutes>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default AllRoutes;
