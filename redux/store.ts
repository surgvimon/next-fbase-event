import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeReducer';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import { verifyAuth } from '@/firestore/firestoreService'


const store = configureStore({
    reducer: {
        themes: themeReducer,
        auth: authReducer,
        profile: profileReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});
store.dispatch(verifyAuth());
export default store
