import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getConfirmedNotifications, confirmedNotificationSuccess, confirmedNotificationFail } from '../Redux/confirmedNotificationActions.jsx';
import { HOST, PORT, notification_load_limit } from '../Utils/Parameters.jsx';
import { getUserData, userSuccess, userFail } from '../Redux/userActions.jsx';
import { userData } from '../Utils/Data/UserData.jsx';

const useFetchConfirmed = (refresh) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const onDispose = new AbortController();

        dispatch(getConfirmedNotifications());
        dispatch(userSuccess(userData));

        fetch(`${HOST}/api/comming/${userData.idpharma}`, {
            signal: onDispose.signal,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => {
            if (!res.ok) {
                throw Error('Invalid response from ' + uri);
            }
            return res.json();
        }).then((data) => {
            dispatch(confirmedNotificationSuccess(data["data"].reverse().slice(0, notification_load_limit)));
        }).catch((e) => {
            dispatch(confirmedNotificationFail(e.message));
        });
        return () => onDispose.abort;
    }, [refresh]);

    return;
};

export default useFetchConfirmed;