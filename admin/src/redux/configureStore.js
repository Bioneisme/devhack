import {applyMiddleware, combineReducers, createStore} from 'redux'
import {persistReducer, persistStore} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './authentication/reducers';
import { botManagementReducer } from "./botManagement/reducers.js";
import { referralsManagementReducer } from "./referralsManagement/reducers.js";

export const rootReducer = combineReducers({
    auth: authReducer,
    botManagement: botManagementReducer,
    referralsManagement: referralsManagementReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);
