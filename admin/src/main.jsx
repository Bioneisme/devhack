import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/configureStore.js';
import { ThemeProvider } from 'styled-components';

import { theme } from './config/theme.js';

import App from './App.jsx'
import Loader from './Loader.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={ store }>
      <PersistGate
        loading={ <Loader /> }
        persistor={ persistor }
      >
        <ThemeProvider theme={ { theme } }>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
)
