import { createSlice } from '@reduxjs/toolkit';

const profileReducer = createSlice({
    name: 'profile',
    initialState: {
        currentUserProfile: null,
        selectUserProfile: null,
    },
    reducers: {
        listenToCurrentUserProfile: (state, action) => {
            state.currentUserProfile = action.payload;
        },
        listenToSelectUserProfile: (state, action) => {
            state.selectUserProfile = action.payload;
        },
    },
});
export const { listenToCurrentUserProfile, listenToSelectUserProfile } = profileReducer.actions;
export default profileReducer.reducer;
