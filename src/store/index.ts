import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { env_isDEV } from '@constants/envVars';

import authReducer from './authSlice';
import uiReducer from './uiSlice';

const rootReducer = combineReducers({
	// auth: persistReducer(persistAuth, authReducer), // disabled for SSR
    auth: authReducer,
	ui: uiReducer,
});

const store = configureStore({
	reducer: rootReducer,
	devTools: env_isDEV,
	middleware: [thunk],
});

export type IRootState = ReturnType<typeof rootReducer>;

export default store;
