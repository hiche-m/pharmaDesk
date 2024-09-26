import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onRefuse, onAccept, selectedNotification }) => {

    if (!isOpen) return null;

    const [isImageLoading, setImageLoading] = useState(true);
    const [error, setError] = useState("");
    const handleOnClose = () => {
        setError("");
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-1/3 shadow-lg">
                <div className="flex flex-col items-center">
                    {isImageLoading && (
                        <div className="w-32 h-32 flex justify-center items-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                        </div>
                    )}
                    {error !== "" && (
                        <div className="flex justify-center items-center">
                            <span className="text-lg text-red-500">{error}</span>
                        </div>
                    )}
                    {error === "" && (<img
                        src={selectedNotification.url}
                        alt="Perscription"
                        className="mb-4 w-96 h-96 object-cover rounded-md"
                        onLoad={() => setImageLoading(false)}
                        onError={() => setError("Image unavailable!")}
                    />)}

                    {/* Info */}
                    <h2 className="text-lg font-bold mb-2">Accepter l'ordonnance?</h2>
                    <p className="text-gray-600 mb-4 text-center">
                        <b>{selectedNotification.firstname}</b> a envoyé une ordonnance.
                    </p>

                    {/* Actions */}
                    <div className="flex justify-between w-full">
                        <button
                            onClick={handleOnClose}
                            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onRefuse}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Refuse
                        </button>
                        <button
                            onClick={() => onAccept(selectedNotification.idprescription)}
                            className="bg-primary text-white px-4 py-2 rounded hover:bg-darkPrimary"
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
