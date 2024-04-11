import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
	is_authenticated: boolean;
	user: any;
}

const internalInitialState: IInitialState = {
	is_authenticated: false,
	user: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState: internalInitialState,
	reducers: {
		setLoggedIn: (state, action) => {
			const { user } = action.payload;
			state.is_authenticated = true;
			state.user = user;
		},
		setLoggedOut: state => {
			state.is_authenticated = false;
			state.user = null;
		},
		setUserToStore: (state, action) => {
			const { user } = action.payload;
			state.is_authenticated = true;
			state.user = user;
		},
	},
});

export const { setLoggedIn, setLoggedOut, setUserToStore } = authSlice.actions;
export default authSlice.reducer;
