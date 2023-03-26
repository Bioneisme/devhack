import {applyMiddleware, combineReducers, createStore} from 'redux'
import {persistReducer, persistStore} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import { userReducer } from './users/reducers.js';
import { readNotificationReducer } from './notification/reducers.js';
import { readMessageReducer } from './message/reducers.js';
import { authReducer } from './authentication/reducers';
import { chartContentReducer } from './chartContent/reducers.js';
import { botManagementReducer } from "./botManagement/reducers.js";
import { referralsManagementReducer } from "./referralsManagement/reducers.js";

export const rootReducer = combineReducers({
    message: readMessageReducer,
    notification: readNotificationReducer,
    users: userReducer,
    auth: authReducer,
    chartContent: chartContentReducer,
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
