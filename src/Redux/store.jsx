import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './notificationActions.jsx';
import userReducer from './userActions.jsx'

const store = configureStore({
    reducer: {
        notifications: notificationReducer,
        user: userReducer
    },
});

export default store;
