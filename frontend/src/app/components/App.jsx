import React, { Suspense } from "react";

import { Layout, Spin } from "antd";

import { useAppSelector } from "../../hooks/useAppSelector.js";
import { authSelector } from "../../redux/index.js";

import AppHeader from "./AppHeader.jsx";

const LazyAppRouter = React.lazy(() => import("./AppRouter.jsx"));
const App = () => {
  // const { Content } = Layout;
  const { isAuth } = useAppSelector(authSelector);
  return (
    <div className="app">
      { isAuth && <AppHeader /> }
      {/*<main className={contentClass}>*/}
        <Suspense fallback={ <Spin size="large" /> }>
          <LazyAppRouter />
        </Suspense>
      {/*</main>*/}
    </div>
  );
};

export default App;
