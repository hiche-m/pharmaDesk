import React from "react";

const DailyIncome = ({ className = "" }) => {
    return (<div className={`${className} bg-superClear rounded-xl shadow-md p-2 flex flex-col`}>
        <div className="h-max">
            Header
        </div>
        <div className="flex flex-grow bg-red-500">
            Content
        </div>
    </div>);
}

export default DailyIncome;