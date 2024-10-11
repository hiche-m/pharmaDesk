import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './notificationActions.jsx';
import confirmedNotificationReducer from './confirmedNotificationActions.jsx';
import userReducer from './userActions.jsx'

const store = configureStore({
    reducer: {
        notifications: notificationReducer,
        confirmedNotifications: confirmedNotificationReducer,
        user: userReducer
    },
});

export default store;
