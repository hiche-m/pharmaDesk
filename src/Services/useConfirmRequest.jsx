import { HOST, PORT } from "../Utils/Parameters.jsx";
import { useState } from 'react';

const useConfirmRequest = () => {

    const [success, setSuccess] = useState(null);

    const [isRequestLoading, setIsRequestLoading] = useState(false);

    const [hasError, setHasError] = useState(null);

    const confirmRequest = async (uid, pid, perscription = "", posiologie = []) => {

        const body = {
            addprescription: perscription,
            possiologyArray: posiologie
        };

        setIsRequestLoading(true);

        try {
            const res = await fetch(`${HOST}:${PORT}/api/Confirmation_prescription/${uid}/${pid}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (!res.ok) {
                throw new Error('An error has occured, please try again in a moment...');
            }

            console.log(await res.json());
            setSuccess(true);
        } catch (error) {
            setHasError(error);
            console.log(error);
        }
        setIsRequestLoading(false);
    }

    return { confirmRequest, success, isRequestLoading, hasError };
};

export default useConfirmRequest;