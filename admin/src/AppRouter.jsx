import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { privateRoutes, publicRoutes } from './routes';

const AppRouter = () => {
  // const {isAuth} = useAppSelector(authSelectors);
  const isAuth = true;
  return (
    <Routes>
      {!isAuth
        ?
        <>
          {privateRoutes.map(route =>
            <Route
              key={route.id}
              element={route.component}
              path={route.path}
            />
          )}

          <Route
            path='*'
            element={
              <Navigate
                to='/dev'
                replace
              />
            }
          />
        </>
        :
        <>
          {publicRoutes.map(route =>
            <Route
              key={route.id}
              element={route.component}
              path={route.path}
            />
          )}
          <Route
            path='*'
            element={
              <Navigate
                to='/login'
                replace
              />
            }
          />
        </>
      }
    </Routes>
  );
};

export default AppRouter;
