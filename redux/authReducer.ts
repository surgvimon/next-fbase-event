import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
    name: 'auth',
    initialState: {
        authenticated: false,
        currentUser: {
            email: '',
            photoURL: null,
            uid: null,
            displayName: '',
            providerId: null

        },
    },
    reducers: {
        signInUser: (state, action) => {
            state.authenticated = true;
            state.currentUser.email = action.payload.email;
            state.currentUser.photoURL = action.payload.photoURL;
            state.currentUser.uid = action.payload.uid;
            state.currentUser.displayName = action.payload.displayName;
            state.currentUser.providerId = action.payload.providerData[0].providerId;
        },
        signOutUser: (state) => {
            state.authenticated = false;
            state.currentUser = {
                email: '',
                photoURL: null,
                uid: null,
                displayName: '',
                providerId: null
    
            };
        },
    },
});
export const { signInUser, signOutUser } = authReducer.actions;
export default authReducer.reducer;
