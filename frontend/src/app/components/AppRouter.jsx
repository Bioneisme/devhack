import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useAppSelector } from "../../hooks/useAppSelector.js";
import { useAppDispatch } from "../../hooks/useAppDispatch.js";
import { authSelector, checkAuth } from "../../redux/index.js";

import { privateRoutes, publicRoutes } from "../../config/routes.jsx";


const AppRouter = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(authSelector);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      dispatch(checkAuth());
    }
  }, []);

  return (
    <Routes>
      {
        isAuth
          ?
          privateRoutes.map(route =>
            <Route
              key={ route.id }
              element={ route.component }
              path={ route.path }
            />
          )
          :
          publicRoutes.map(route =>
            <Route
              key={ route.id }
              element={ route.component }
              path={ route.path }
            />
          )
      }
      <Route
        path="*"
        element={
          <Navigate
            to="/"
            replace
          />
        }
      />
    </Routes>
  );
};

export default AppRouter;
