import { createSlice } from '@reduxjs/toolkit';

const profileReducer = createSlice({
    name: 'profile',
    initialState: {
        currentUserProfile: null,
        selectedUserProfile: null,
    },
    reducers: {
        listenToCurrentUserProfile: (state, action) => {
            state.currentUserProfile = action.payload;
        },
        listenToSelectedUserProfile: (state, action) => {
            state.selectedUserProfile = action.payload;
        },
    },
});
export const { listenToCurrentUserProfile, listenToSelectedUserProfile } = profileReducer.actions;
export default profileReducer.reducer;
