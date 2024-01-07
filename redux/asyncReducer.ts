import { createSlice } from '@reduxjs/toolkit';

const asyncReducer = createSlice({
    name: 'async',
    initialState: {
        loading: false,
        error: null,
    },
    reducers: {
        asyncActionStart: (state) =>{
            state.loading = true;
            state.error = null;
        },
        asyncActionFinal: (state) =>{
            state.loading = false;
            state.error = null;
        },
        asyncActionError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
export const { asyncActionStart, asyncActionFinal, asyncActionError } = asyncReducer.actions;
export default asyncReducer.reducer;
