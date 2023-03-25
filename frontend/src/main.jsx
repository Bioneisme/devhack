import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./redux/index.js";
import { antdStyles } from "./config/antdStyles.js";

import { App } from "./app/index.js";

import "./styles/main.scss";

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(
    <BrowserRouter>
      <Provider store={ store }>
        <PersistGate persistor={ persistor }>
          <ConfigProvider theme={ antdStyles }>
            <App />
          </ConfigProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
