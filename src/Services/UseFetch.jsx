import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getNotifications, notificationSuccess, notificationFail } from '../Redux/notificationActions.jsx';
import { HOST, PORT, notification_load_limit } from '../Utils/Parameters.jsx';
import { getUserData, userSuccess, userFail } from '../Redux/userActions.jsx';
import { userData } from '../Utils/Data/UserData.jsx';

const useFetch = (refresh) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const onDispose = new AbortController();

        dispatch(getNotifications());
        dispatch(userSuccess(userData));

        fetch(`${HOST}:${PORT}/api/demande`, {
            signal: onDispose.signal,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: userData.idpharma,
            }),
        }).then(res => {
            if (!res.ok) {
                throw Error('Invalid response from ' + uri);
            }
            return res.json();
        }).then((data) => {
            dispatch(notificationSuccess(data["data"].reverse().slice(0, notification_load_limit)));
        }).catch((e) => {
            dispatch(notificationFail(e.message));
        });
        return () => onDispose.abort;
    }, [refresh]);

    return;
};

export default useFetch;