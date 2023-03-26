import React, { lazy, Suspense } from 'react';

import Loader from './Loader.jsx';
import { DashboardLayout } from './layout/DashboardLayout/index.js';

import './static/css/style.css';
import 'antd/dist/antd.css';
import 'react-quill/dist/quill.snow.css';

const LazyAppRouter = lazy(() => import('./AppRouter.jsx'));
const App = () => {
  return (
    <>
      <Suspense fallback={ <Loader /> }>
        <DashboardLayout page={ <LazyAppRouter /> } />
      </Suspense>
    </>
  );
};

export default App;
