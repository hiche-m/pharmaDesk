import React, { useState } from "react";
import pfp4 from "../Assets/Images/pfp4.svg"
import { recentActivity, typeColors } from "../Utils/Data/ActivityData.jsx";
import ActivityTile from "./ActivityTile.jsx";
import NotificationTile from "./NotificationTile.jsx";
import { useSelector } from "react-redux";
import NotifictionsSkeleton from "../Skeletons/notifications_skeleton.jsx";

const SideContent = ({ handleRefresh = () => { }, acivity = recentActivity, openNotification = (notification_data) => { }, loading = false }) => {

    const { isLoading, data, error, index } = useSelector(state => state.notifications);

    return (
        <>
            <div className="w-full h-full min-w-[215px] bg-lightShapes flex flex-col grow space-y-5 p-2 overflow-y-auto overflow-x-auto">
                <div className="self-end flex flex-row items-center">
                    <div className="flex flex-col items-end p-4">
                        <div className="text-sm font-medium text-textPrimary">Creamy Hudson</div>
                        <div className="text-xs text-textSecoundary">Administrateur</div>
                    </div>
                    <img src={pfp4} className="h-8 w-8 rounded-full" />
                </div>
                <div className="flex flex-col">
                    <div className="font-medium mb-2">Activité Récente</div>
                    {acivity.map(
                        (tile, index) => {
                            const color = typeColors[tile.type];
                            return (<ActivityTile key={`activity-tile-${index}`} tile={tile} last={index === (acivity.length - 1)} color={color} />);
                        }
                    )}
                </div>
                <div className="flex flex-col space-y-2">
                    <div className="inline-flex grow mb-2 justify-between items-center">
                        <span className="font-medium">Commandes</span>
                        {!isLoading && (<span className="text-sm ml-2 text-textSecoundary cursor-pointer" onClick={() => handleRefresh()}>Refresh</span>)}
                        {isLoading && (<span className="text-sm ml-2 text-disabled">Refresh</span>)}
                    </div>
                    {isLoading && <NotifictionsSkeleton />}
                    {!isLoading && data.map((tile, not_index) => (<NotificationTile key={`notification-tile-${not_index}`} tile={tile} index={not_index} handleClick={() => openNotification(tile)} />))}
                </div>
            </div>
            {loading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 pointer-events-none">
                    <div className="text-white text-xl">Loading...</div>
                </div>
            )}
        </>
    );
}

export default SideContent;