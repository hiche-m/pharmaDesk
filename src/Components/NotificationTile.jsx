import React from "react";
import persp from "../Assets/Images/persp.svg"
import { formatDate } from "../Utils/Functions.jsx";

const NotificationTile = ({ handleClick = () => { }, tile, index }) => {
    const timestamp = new Date(tile.created_at);

    const formattedTime = formatDate((new Date()) - timestamp);

    return (
        <div onClick={tile.confirmed == 0 ? handleClick : null} className={`flex flex-row p-4 justify-start items-center bg-superClear ${tile.confirmed == 0 ? "bg-opacity-75" : "bg-opacity-0"} rounded-xl ${tile.confirmed == 0 ? "shadow-lg" : "shadow-none"} cursor-pointer hover:bg-opacity-95 active:bg-disabled active:shadow-none`}>
            <img src={persp} className="rounded-full w-1/5 mr-4" />
            <div className="flex flex-col mr-2 text-sm">
                <span>Vous avez reçu une commande de <span className="font-medium">{tile.firstname}</span>.</span>
                <span className="text-textSecoundary italic">Appuyez ici pour voir l'ordonnance</span>
            </div>
            <div className="text-xs italic text-center">{formattedTime}</div>
        </div>
    );
}

export default NotificationTile;