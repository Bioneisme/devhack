import { applyMiddleware, combineReducers, createStore } from "redux"
import { persistReducer, persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/authReducer.js";

// combine reducers
export const rootReducer = combineReducers({
  auth: authReducer
});

// persist is used ti save store in local storage
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);
