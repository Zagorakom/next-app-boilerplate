import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isBodyScrollLocked: false,
	bodyScrollLockedBy: '',
    theme: 'light',
    sidebarShow: true, // TEST
    sidebarSection: 'Main', // TEST
};

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		changeSidebar: (state, action) => ({ ...state, ...action.payload }),
        setBodyScrollState: (state, action) => {
            const {locked, lockedBy} = action.payload;
            state.isBodyScrollLocked = locked;
            state.bodyScrollLockedBy = lockedBy;
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
	},
});

export const { changeSidebar, setBodyScrollState, setTheme } = uiSlice.actions;
export default uiSlice.reducer;
