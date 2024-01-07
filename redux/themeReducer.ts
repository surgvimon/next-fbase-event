import { createSlice } from '@reduxjs/toolkit';

const themeReducer = createSlice({
    name: 'themes',
    initialState: {
        theme: 'light',
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
    },
});
export const { setTheme } = themeReducer.actions;
export default themeReducer.reducer;
